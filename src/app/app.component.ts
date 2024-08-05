import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkPlaceComponent } from './components/work-place/work-place.component';
import { DataService } from './services/data.service';
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
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  dataService = inject(DataService);
  data: Signal<IWorkplace[] | undefined> = toSignal(this.dataService?.getData());
  // totalExperience: Signal<number | undefined> = computed(() => this.data()?.forEach(el => el.))

  constructor() {
    // this.data()?.forEach((el: IWorkplace) => console.log(el))
  }
}
