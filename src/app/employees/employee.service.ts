import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  add(employee: Employee) {
    throw new Error('Method not implemented.');
  }
  private data: Employee[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@tsq.com', department: 'Engineering' },
    { id: 2, name: ' Arun', email: 'ar@tsq.com', department: 'IT' },
    { id: 3, name: 'Abc', email: 'abc@tsq.com', department: 'Sales' },
    { id: 4, name: 'Johnson', email: 'johnson@tsq.com', department: 'BPO' },
    { id: 5, name: 'John', email: 'alice@tsq.com', department: 'Helpdesk' },
    { id: 6, name: 'smith', email: 'alice@tsq.com', department: 'Engineering' },
    { id: 7, name: 'Adam', email: 'adam@tsq.com', department: 'Engineering' },
    { id: 8, name: 'Bob Smith', email: 'bob@tsq.com', department: 'Marketing' },
    { id: 9, name: 'Charlie', email: 'charlie@tsq.com', department: 'Sales' },
    { id: 10, name: 'Diana Prince', email: 'diana@tsq.com', department: 'HR' },
    { id: 11, name: 'Ethan Hunt', email: 'ethan@tsq.com', department: 'Security' },
    { id: 12, name: 'Fiona Gallagher', email: 'fiona@tsq.com', department: 'Finance' },
  ];

  getAll(): Employee[] {
    return [...this.data];
  }

  delete(id: number) {
    this.data = this.data.filter(e => e.id !== id);
  }
}