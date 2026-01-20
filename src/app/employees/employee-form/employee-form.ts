import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,MatInputModule,MatButtonModule,MatCardModule  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const employee: Employee = {
        id: Date.now(),
        name: this.form.value.name!,
        email: this.form.value.email!,
        department: this.form.value.department!
      };

      this.service.add(employee);
      this.form.reset();
    }
  }


}
