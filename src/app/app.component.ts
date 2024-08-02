import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkPlaceComponent } from './components/work-place/work-place.component';
import { DataService } from './services/data.service';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { IWorkplace } from './interfaces/workplace.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, WorkPlaceComponent, NgStyle
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'resume';
  dataService = inject(DataService);

  data: Signal<IWorkplace[] | undefined> = toSignal(this.dataService?.getData());

  constructor() {
    console.log(this.data())
    // this.data().forEach((el: IWorkplace) => console.log(el))
  }
}
