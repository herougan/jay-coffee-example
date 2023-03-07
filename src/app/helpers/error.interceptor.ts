import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AccountService } from "../services/account.service";



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private accountService: AccountService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(catchError(err => {

			// Auto logout on error
			if ([401, 403].includes(err.status) && this.accountService.userValue) {
				this.accountService.logout();
			}

			const error = err.error?.message || err.statusText;

			// Log to management system
			console.error(err); 
			return throwError(() => error);
		}))
	}
}
