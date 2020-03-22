import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent
{
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '09/26/2020',
        time: '10:00 AM',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
          address: '1046 DT',
          city: 'Pune',
          country: 'India'
        }
    }

    handleEventClick(data)
    {
        console.log('received: '+ data);
    }
}