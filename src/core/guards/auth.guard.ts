import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router:Router = new Router();
  if (localStorage.getItem('user token') != null) {
    return true;
  } else {
    router.navigate(['/login'])
    return false;
  }
};
