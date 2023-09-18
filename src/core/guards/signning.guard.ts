import { CanActivateFn, Router } from '@angular/router';

export const signningGuard: CanActivateFn = (route, state) => {
  let router: Router = new Router();
  if (localStorage.getItem('user token') != null) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};