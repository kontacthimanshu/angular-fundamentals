import { Injectable } from '@angular/core';
import {IUser} from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService
{
    currentUser:IUser;

    constructor(private http: HttpClient)
    {

    }

    loginUser(userName:string, password:string)
    {
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})};
        let logininfo = {username: userName, password:password};
        return this.http.post('/api/login', logininfo, options).pipe(tap(data => {
           this.currentUser = <IUser>data['user'];     
        })).pipe(catchError(err=>{return of(false)}));
    }

    isAuthenticated()
    {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string)
    {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    logout()
    {
        this.currentUser = undefined;
        let options = {headers:new HttpHeaders({'Content-Type':'application/json'})};
        return this.http.post('/api/logout',{},options);
    }
}