/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const APIkey = 'AIzaSyC69Eo0viZn0tCiC0ecxGhgbXi00pdCSBA';
    const paramReq = req.clone({
      params: req.params.set(
        'key',
        APIkey
      )
    });
    return next.handle(paramReq);
  }
}
