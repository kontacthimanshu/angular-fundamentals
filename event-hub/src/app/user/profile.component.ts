import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left:10px}
  .error input { background-color:#E3C3C5; }
  .error ::ms-input-placeholder {color: #999;}
  `]
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:any)
    {

    }

    ngOnInit()
    {
        let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }
       
    cancel()
    {
        this.router.navigate(['/events']);
    }

    saveProfile(formValue)
    {
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
            this.toastr.success('Profile saved!');
        }
    }

    logout()
    {
        this.authService.logout().subscribe(()=>{
            this.router.navigate(['/user/login']);
        });
    }
}