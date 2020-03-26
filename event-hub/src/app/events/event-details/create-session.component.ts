import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../shared/event.model'
@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles:[`
    em {float:right; color:#E05C65; padding-left:10px}
    .error input { background-color:#E3C3C5; }
    .error select { background-color:#E3C3C5; }
    .error textarea { background-color:#E3C3C5; }
    .error ::ms-input-placeholder {color: #999;}
    `]
})
export class CreateSessionComponent implements OnInit
{
    sessionForm:FormGroup;

    ngOnInit()
    {
        let sessionName = new FormControl('',Validators.required);
        let presenter = new FormControl('',Validators.required);
        let duration = new FormControl('',Validators.required);
        let level = new FormControl('',Validators.required);
        let abstract = new FormControl('',[Validators.required, Validators.maxLength(400), this.restrictedWords]);

        this.sessionForm = new FormGroup({
            sessionName: sessionName,
            presenter: presenter,
            duration: duration,
            level: level,
            abstract: abstract
        });
    }

    saveSession(formValue)
    {
        let newSession:ISession = {
            id:undefined,
            name:formValue.sessionName,
            presenter:formValue.presenter,
            duration: formValue.duration,
            level:formValue.level,
            abstract:formValue.abstract,
            voters:[]
        };

        console.log(newSession);
    }

    private restrictedWords(formControl:FormControl) : {[key: string]: any}
    {
        return formControl.value.includes('foo') ? {'restrictedWords': 'foo'} : null;
    }
}