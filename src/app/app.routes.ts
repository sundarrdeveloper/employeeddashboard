import { Routes } from '@angular/router';

import { Employee } from './employees/employee';
import { Login } from './auth/login/login';
import { EmployeeForm } from './employees/employee-form/employee-form';
import { EmployeeList } from './employees/employee-list/employee-list';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';
import { roleGuard } from './auth/role-guard';


export const routes: Routes = [

    {path:'',component:Login},
    {path: 'employees',component: EmployeeList,canActivate: [authGuard] },
    {path: 'employeesformadd',component: EmployeeForm,canActivate: [roleGuard],data:{role:'Admin'} },
        {path: 'dashboard',component: Dashboard,canActivate: [authGuard] },


];
