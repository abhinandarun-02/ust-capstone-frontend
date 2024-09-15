import { Component, inject, OnInit } from '@angular/core';
import { WeddingService } from '../../../services/wedding.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { Wedding } from '../../../models/wedding.model';
import { ExpenseService } from '../../../services/expense.service';
import { Expense } from '../../../models/expense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private weddingService = inject(WeddingService)
  private authService = inject(AuthService)
  private toastService = inject(ToastService)
  private expenseService = inject(ExpenseService)

  wedding!: Wedding;
  expenses!: Expense[]
  loading: boolean = false;

  private labels!: string[];
  private dataValues!: number[]
  data: any;

  countdown: any = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  private intervalId: any;

  getWeddingDate() {
    return new Date(this.wedding.date).toDateString();
  }


  ngOnInit(): void {
    this.loading = true;
    let plannerId = this.authService.getUserId()

    if (this.authService.isUserOnboarding()) {
      return;
    }

    if (!plannerId) {
      console.error('Planner ID is not found');
      this.loading = false;
      return;
    }

    this.weddingService.getWeddingByPlannerId(plannerId).subscribe({
      next: (response) => {
        console.log('GET request successful:', response);
        this.wedding = response;
        this.loading = false;
        this.startCountdown();
      },
      error: (err) => {
        console.error('Error occurred during GET request:', err);
        this.toastService.error('Error occurred during GET request');
        this.loading = false;
      }
    });

    this.expenseService.getExpenses().subscribe({
      next: (response) => {
        console.log('GET request successful:', response);
        this.expenses = response;
        // Aggregate expenses by category
        const expenseMap = new Map<string, number>();
        this.expenses.forEach(expense => {
          if (expenseMap.has(expense.category)) {
            expenseMap.set(expense.category, expenseMap.get(expense.category)! + expense.cost);
          } else {
            expenseMap.set(expense.category, expense.cost);
          }
        });

        // Convert the map back to an array
        const aggregatedExpenses = Array.from(expenseMap, ([category, cost]) => ({ category, cost }));

        this.labels = aggregatedExpenses.map(expense => expense.category);
        this.dataValues = aggregatedExpenses.map(expense => expense.cost);

        this.data = {
          labels: this.labels,
          datasets: [{
            label: 'Budget',
            data: this.dataValues,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
            ],
            hoverOffset: 4
          }]
        };
      },
      error: (err) => {
        console.error('Error occurred during GET request:', err);
        this.toastService.error('Error occurred during GET request');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCountdown(): void {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const weddingDate = new Date(this.wedding.date).getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        this.countdown = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        return;
      }

      this.countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }, 1000);
  }


  getTotalBudget() {
    return this.expenses.reduce((acc, expense) => acc + expense.cost, 0);
  }




}
