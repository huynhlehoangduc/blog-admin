import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import {Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class ResponseHandlerInterceptor implements HttpInterceptor {

    constructor(
        protected authService: AuthService,
        protected router: Router,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError(err => {
                  this.handleAuthError(err);
                  return of(err);
                })
            );
    }

    private handleAuthError(err: HttpErrorResponse): void {
        switch (err.status) {
            case 401:
                void this.router.navigate(['admin-login']);
                break;
            case 403:
                /*const messageError403 = err?.error?.error?.error_user_msg;
                if (messageError403 !== undefined) {
                    this.globalToastService.toast('error', 'Thông báo', messageError403);
                    break;
                }
                this.router.navigate([ '/accessdenied' ]);*/
                break;
            case 404:
                void this.router.navigate([ '/404' ]);
                break;
            case 410:
                void this.router.navigate([ '/error' ]);
                break;
            case 422: // Validation fail
                /*const message = typeof err.error === 'string' ? err.error : err.error.map((errorValidate) => {
                    return `${ errorValidate.field_label }: ${ errorValidate.message }`;
                }).join(', ');
                this.globalToastService.toast('error', 'Thông báo', message);*/
                break;
            case 400: // Validation Facebook
                /*const messageError = err?.error?.error?.message;
                this.globalToastService.toast('error', 'Thông báo', messageError);*/
                break;
            case 500: // Validation Facebook
                /*this.globalToastService.toast('error', 'Thông báo', err?.error?.message);*/
                break;
            default:
                console.log(err);
                break;
        }
    }
}
