import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule,MatInputModule,MatButtonModule,MatCardModule,MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  error='';

  constructor(public auth:Auth,public router:Router){}

  login(){
    if(this.auth.login(this.username,this.password)){
      this.router.navigate(['/employees']);
    }
    else{
      this.error='wrong username or password'
    }
  }

}
