import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
    selector:'simple-modal',
    template:`
        <div #containerRef id="simple-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{title}}</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles:[
        `
        .modal .modal-dialog .modal-content { background-color: #343a40; }
        .modal-body {height:500px; overflow-y: scroll;}
        `
    ]
})
export class SimpleModalComponent
{
    @Input() title:string;
    @ViewChild('containerRef') containerEl:ElementRef;

    constructor(@Inject(JQ_TOKEN) private $:any){

    }

    closeModal()
    {
        this.$(this.containerEl.nativeElement).modal('hide');
    }

}