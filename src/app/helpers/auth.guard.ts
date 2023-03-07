import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private accountService: AccountService,
	) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		
		// Get user login info
		const user = this.accountService.userValue;

		// If authorised
		if (user)
			return true;

		// Not login
		this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
		return false;
	}
}

