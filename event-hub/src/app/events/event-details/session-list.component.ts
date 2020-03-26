import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html',
    styles:['.session-block {background-color:#343a40; margin-bottom:10px;}']
})
export class SessionListComponent implements OnChanges
{
    @Input() sessions:ISession[];
    @Input() filterBy:string;
    visibleSessions:ISession[] = [];

    ngOnChanges()
    {
        if(this.sessions)
        {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter)
    {
        if(filter === 'all')
        {
            this.visibleSessions = this.sessions.slice(0);
        }
        else
        {
            this.visibleSessions = this.sessions.filter(so=>
                {
                    return so.level.toLocaleLowerCase() === filter
                });
        }
    }
}