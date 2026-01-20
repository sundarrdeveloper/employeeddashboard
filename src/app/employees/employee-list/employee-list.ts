import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Auth } from '../../auth/auth';

@Component({
  standalone: true,
  selector: 'app-employee-list',
  imports: [CommonModule,SearchBar,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
all: Employee[] = [];
  filtered: Employee[] = [];

  page = 0;
  size = 5;

  constructor(
    private service: EmployeeService,
    private auth: Auth
  ) {}

  ngOnInit() {
    this.all = this.service.getAll();
    this.filtered = [...this.all];
  }

  search(text: string) {
    this.filtered = this.all.filter(e =>
      e.name.toLowerCase().includes(text.toLowerCase())
    );
    this.page = 0;
  }

  get paged() {
    return this.filtered.slice(this.page * this.size, (this.page + 1) * this.size);
  }

  next() { this.page++; }
  prev() { if (this.page > 0) this.page--; }

  delete(id: number) {
    this.service.delete(id);
    this.all = this.service.getAll();
    this.filtered = [...this.all];
  }

  logout() {
    this.auth.logout();
    location.reload();
  }
}
