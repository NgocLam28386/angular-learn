import { NgModule } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  let auth = localStorage.getItem('token');
  if (!auth) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
