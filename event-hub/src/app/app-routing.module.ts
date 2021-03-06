import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventResolverService } from './events/event-details/event-resolver.service';


const routes: Routes = [
  {path:'events', component: EventsListComponent, resolve:{events: EventsListResolverService}},
  {path:'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
  {path:'events/:id', component: EventDetailsComponent, resolve:{event: EventResolverService}},
  {path:'events/sessions/new', component:CreateSessionComponent},
  {path:'404', component:Error404Component},
  {path:'', redirectTo:'/events',pathMatch:'full'},
  {path:'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
