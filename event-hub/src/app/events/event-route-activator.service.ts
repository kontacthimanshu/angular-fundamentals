import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate
{
    constructor(private eventService:EventService, private router:Router)
    {

    }

    canActivate(activatedRoute:ActivatedRouteSnapshot)
    {
        const eventExists = !!this.eventService.getEvent(+activatedRoute.params['id']);
        if(!eventExists)
            this.router.navigate(['/404']);
        
        return eventExists;
    }
}