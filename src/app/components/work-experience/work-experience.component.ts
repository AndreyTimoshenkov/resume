import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { WorkPlaceComponent } from '../work-place/work-place.component';
import { IWorkplace } from '../../interfaces/workplace.interface';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe';
import { endDateSanitiser, getMonthDifference, startDateSanitiser } from '../../helpers/timeline-helpers';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [
    WorkPlaceComponent, GetYearsAndMonthsPipe
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.less'
})
export class WorkExperienceComponent {
  @Input() workplaces: IWorkplace[];
}
