import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN } from './common/jquery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

declare let $:any;
declare let toastr:any;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
              EventService, 
              {
                provide: TOASTR_TOKEN,
                useValue: toastr
              },
              {
                provide: JQ_TOKEN,
                useValue: $
              }, 
              EventRouteActivatorService,
              EventsListResolverService,
              AuthService,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)
{
  if(component.isDirty)
    return window.confirm("You have not saved the event yet. Are you sure you want to exit?");
  return true;
}