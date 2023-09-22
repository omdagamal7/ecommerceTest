import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const signningGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem('user token') != null) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};