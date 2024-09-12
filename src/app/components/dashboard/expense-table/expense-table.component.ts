import { Component, inject } from '@angular/core';
import { Expense } from '../../../models/expense.model';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrl: './expense-table.component.css'
})
export class ExpenseTableComponent {


  expenses: Expense[] = [
    {
      id: 1,
      weddingId: 1,
      name: 'Flowers',
      category: 'Decorations',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 500,
      notes: 'Roses and lilies'
    },
    {
      id: 2,
      weddingId: 1,
      name: 'Catering',
      category: 'Food',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 2000,
      notes: 'Buffet style'
    },
    {
      id: 3,
      weddingId: 1,
      name: 'Photographer',
      category: 'Photography',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 1500,
      notes: 'Includes engagement photos'
    },
    {
      id: 1,
      weddingId: 1,
      name: 'Flowers',
      category: 'Decorations',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 500,
      notes: 'Roses and lilies'
    },
    {
      id: 2,
      weddingId: 1,
      name: 'Catering',
      category: 'Food',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 2000,
      notes: 'Buffet style'
    },
    {
      id: 3,
      weddingId: 1,
      name: 'Photographer',
      category: 'Photography',
      createdAt: '2020-11-01',
      dueDate: '2020-12-01',
      cost: 1500,
      notes: 'Includes engagement photos'
    },
  ];
}
