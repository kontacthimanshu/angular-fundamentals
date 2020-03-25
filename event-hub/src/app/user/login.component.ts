import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent
{
    userName:string;
    password:string;

    constructor(private authService:AuthService, private router:Router)
    {

    }

    login(formValue)
    {
        this.authService.loginUser(formValue.userName,formValue.password);
        if(this.authService.isAuthenticated())
        {
            this.router.navigate(['/events']);
        }
    }

    cancel()
    {
        this.router.navigate(['/events']);
    }
}