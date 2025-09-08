import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/Contact/submit')) {
    return next(req);
  }
  debugger;
  const token = localStorage.getItem('token');
if (token) {
  const newReqData = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(newReqData);
} else {
  return next(req);
}
};
