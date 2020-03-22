import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        `]
})
export class EventThumbnailComponent
{
    @Input() event:any;
    @Output() eventClick = new EventEmitter();

    handleClickMe()
    {
        this.eventClick.emit(this.event.name);
    }
}