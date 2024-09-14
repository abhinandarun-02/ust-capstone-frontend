import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
  }

  getExpenses() {
    const response = this.http.get<Expense[]>(`${environment.eventUrl}/expenses`);
    return response;
  }
}
