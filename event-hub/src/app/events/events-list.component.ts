import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit
{
    events = [
        {
            
        },
        {

        },
        {

        },
        {

        }

    ];
    constructor(private eventService:EventService, private route:ActivatedRoute){
        
    }

    ngOnInit()
    {
        this.events = this.route.snapshot.data["events"];
    }
}