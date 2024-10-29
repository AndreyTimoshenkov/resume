import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkPlaceComponent } from './components/work-place/work-place.component';
import { DataService } from './services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IWorkplace } from './interfaces/workplace.interface';
import { BioComponent } from './components/bio/bio.component';
import { AccordionModule } from 'primeng/accordion';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, BioComponent, AccordionModule, WorkExperienceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  dataService = inject(DataService);
  data: Signal<IWorkplace[]>;
  // totalExperience: Signal<number | undefined> = computed(() => this.data()?.forEach(el => el.))

  constructor() {
    //@ts-ignore
    this.data = toSignal(this.dataService.getWorkplaces());
  }
}
