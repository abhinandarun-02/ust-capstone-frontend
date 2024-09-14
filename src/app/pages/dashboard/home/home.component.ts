import { Component, inject, OnInit } from '@angular/core';
import { WeddingService } from '../../../services/wedding.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { Wedding } from '../../../models/wedding.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  weddingService = inject(WeddingService)
  authService = inject(AuthService)
  userService = inject(UserService)
  toastService = inject(ToastService)

  wedding!: Wedding;
  loading: boolean = false;

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

    if (this.userService.isUserOnboarding()){
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

  data = {
    labels: [
      'Venue',
      'Photography',
      'Catering'
    ],
    datasets: [{
      label: 'Budget',
      data: [50000, 20000, 32000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
}
