import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <div class="container">
      <events-list></events-list>
    </div>
  `
})
export class AppComponent {
  title = 'event-hub';
}
