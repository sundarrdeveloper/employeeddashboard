import { inject } from '@angular/core';
import { CanActivateFn,Router,ActivatedRouteSnapshot } from '@angular/router';
import { Auth } from './auth';


export const roleGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {


  const auth=inject(Auth);
  const router=inject(Router);

  const expectrole =route.data['role'];

  if (auth.getrole()=== expectrole){
  return true;

  }

  alert('Admin only')
    router.navigate(['/employee']);
    return false;
  
};
