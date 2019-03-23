import { HttpsInterceptor } from "./https.interceptor";
import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpsInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return;
  }
}