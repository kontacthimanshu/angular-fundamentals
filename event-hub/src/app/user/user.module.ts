import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[]
})
export class UserModule
{

}