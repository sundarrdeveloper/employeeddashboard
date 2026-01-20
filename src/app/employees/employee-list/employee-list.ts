import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; // Added
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // Added
import { RouterModule } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Auth } from '../../auth/auth';

@Component({
  standalone: true,
  selector: 'app-employee-list',
  imports: [
    CommonModule, 
    SearchBar,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './employee-list.html',
styleUrls: ['./employee-list.css'],
})
export class EmployeeList implements OnInit {
  all: Employee[] = [];
  filtered: Employee[] = [];
  currentSearch: string = '';
  
  displayedColumns: string[] = ['name', 'email', 'department', 'actions'];

  page = 0;
  size = 5;

  constructor(private service: EmployeeService, private auth: Auth) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.all = this.service.getAll();
    this.applyFilter();
  }

  search(text: string) {
    this.currentSearch = text;
    this.page = 0;
    this.applyFilter();
  }

  applyFilter() {
    this.filtered = this.all.filter(e =>
      e.name.toLowerCase().includes(this.currentSearch.toLowerCase())
    );
  }

  get paged() {
    const start = this.page * this.size;
    return this.filtered.slice(start, start + this.size);
  }

  next() { if ((this.page + 1) * this.size < this.filtered.length) this.page++; }
  prev() { if (this.page > 0) this.page--; }

  delete(id: number) {
    this.service.delete(id);
    this.refreshData();
  }

  logout() {
    this.auth.logout();
    location.reload();
  }
}



