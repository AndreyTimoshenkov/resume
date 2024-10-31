import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IWorkplace } from './interfaces/workplace.interface';
import { BioComponent } from './components/bio/bio.component';
import { AccordionModule } from 'primeng/accordion';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { endDateSanitiser, getMonthDifference, startDateSanitiser } from './helpers/timeline-helpers';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, BioComponent, AccordionModule, WorkExperienceComponent, PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  dataService = inject(DataService);
  data: Signal<IWorkplace[]>;

  constructor() {
    //@ts-ignore
    this.data = toSignal(this.dataService.getWorkplaces());
  }

  get totalWorkExperience() {
    let result = 0;
    this.data()?.forEach(job => {
      result += getMonthDifference(startDateSanitiser(job.start), endDateSanitiser(job.end))
    })
    return result;
  }
}
