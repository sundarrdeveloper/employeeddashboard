import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

import { EmployeeService } from '../employees/employee.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
   standalone: true,
  imports: [ CommonModule,
    MatCardModule,BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
chartData!: ChartData<'pie', number[], string>;

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    const employees = this.service.getAll();
    const map: Record<string, number> = {};

    employees.forEach(e => {
      if (e.department) {
        map[e.department] = (map[e.department] || 0) + 1;
      }
    });

    this.chartData = {
      labels: Object.keys(map),
      datasets: [
        {
          data: Object.values(map)
        }
      ]
    };
  }
}

