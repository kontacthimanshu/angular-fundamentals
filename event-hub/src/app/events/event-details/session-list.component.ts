import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import { sequenceEqual } from 'rxjs/operators';

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
    @Input() sortBy:string;

    ngOnChanges()
    {
        if(this.sessions)
        {
            this.filterSessions(this.filterBy);
            this.sortBy === 'title' ? this.visibleSessions.sort(sortByTitleAsc) : this.visibleSessions.sort(sortByVotesDesc);
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

function sortByTitleAsc(s1:ISession,s2:ISession)
{
    if(s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}

function sortByVotesDesc(s1:ISession,s2:ISession)
{
    return s2.voters.length - s1.voters.length;
}