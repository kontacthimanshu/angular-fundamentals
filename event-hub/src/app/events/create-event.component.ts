import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
    em {float:right; color:#E05C65; padding-left:10px}
    .error input { background-color:#E3C3C5; }
    .error ::ms-input-placeholder {color: #999;}
    `]
})
export class CreateEventComponent
{
    isDirty:boolean = true;
    newEvent:IEvent;
    constructor(private router:Router, private eventService:EventService)
    {

    }

    cancel()
    {
        this.router.navigate(['/events']);
    }
    
    saveEvent(formValues)
    {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

}