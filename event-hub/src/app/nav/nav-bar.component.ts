import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
    selector:'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles:[
        `li > a.active { color: #F97924 }
        `
    ]
})
export class NavBarComponent
{
    searchTerm:string;
    foundSessions:ISession[];

    constructor(public authService:AuthService, private eventService:EventService)
    {

    }

    searchSessions(formValue)
    {
        this.eventService.searchSessions(formValue.searchTerm).subscribe(sessions=>{
            this.foundSessions = sessions;
        });
    }
}