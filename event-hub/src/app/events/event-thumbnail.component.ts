import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html',
    styles:[`
        .thumbnail { min-height: 210px; padding-left: 10px; background-color:#343a40; margin-bottom:10px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        `]
})
export class EventThumbnailComponent
{
    @Input() event:any;
    @Output() eventClick = new EventEmitter();
}