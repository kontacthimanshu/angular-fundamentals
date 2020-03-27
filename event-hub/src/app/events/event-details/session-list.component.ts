import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

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

    constructor(private authService:AuthService, private voterService:VoterService)
    {

    }

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

    toggleVote(session:ISession)
    {
        if(this.userHasVoted(session))
        {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        }
        {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }
    }

    userHasVoted(session:ISession)
    {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
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