import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkPlaceComponent } from './components/work-place/work-place/work-place.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, WorkPlaceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'resume';
}
