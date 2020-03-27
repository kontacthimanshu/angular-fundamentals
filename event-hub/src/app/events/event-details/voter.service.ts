import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService
{
    addVoter(session:ISession, userName:string)
    {
        session.voters.push(userName);
    }

    deleteVoter(session:ISession, userName:string)
    {
        session.voters = session.voters.filter(voter=> voter !== userName);
    }

    userHasVoted(session:ISession, userName:string) : boolean
    {
        let retVal:boolean = false;
        retVal = session.voters.some(voter=>voter === userName);
        return retVal;
    }

}