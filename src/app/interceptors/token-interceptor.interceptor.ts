import { Injectable } from '@angular/core';
import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';



export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const userToken = localStorage.getItem('token');
  if(userToken){
      req=req.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`
        }
    })
  }
  
  return next(req);
};
