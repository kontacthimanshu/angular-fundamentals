import { Injectable } from '@angular/core';
import { ISession, IEvent } from '../shared/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService
{
    constructor(private http:HttpClient)
    {

    }

    addVoter(session:ISession, userName:string,eventId:string)
    {
        console.log(eventId);
        let options = { headers:new HttpHeaders({'Content-Type':'application/json'}) };
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe();
    }

    deleteVoter(session:ISession, userName:string, eventId:string)
    {
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.delete(url).pipe(catchError(this.handleError('deleteVoter'))).subscribe();
    }

    userHasVoted(session:ISession, userName:string, eventId:string) : boolean
    {
        let retVal:boolean = false;
        retVal = session.voters.some(voter=>voter === userName);
        return retVal;
    }

    private handleError<T>(operation = 'operation', result?: T)
    {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
    }
}