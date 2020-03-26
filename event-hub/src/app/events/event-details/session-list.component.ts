import { Component, Input } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html',
    styles:['.session-block {background-color:#343a40; margin-bottom:10px;}']
})
export class SessionListComponent
{
    @Input() sessions:ISession[];
}