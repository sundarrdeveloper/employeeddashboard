import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [];

  constructor() {
    const data = localStorage.getItem('employees');
    this.employees = data ? JSON.parse(data) : [];
  }

  getAll(): Employee[] {
    return [...this.employees];
  }

  add(employee: Employee) {
    this.employees.push(employee);
    this.save();
  }

  delete(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);
    this.save();
  }

  private save() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
}
