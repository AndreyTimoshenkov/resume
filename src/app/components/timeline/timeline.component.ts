import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe';
import { TagModule } from 'primeng/tag';
import { endDateSanitiser, getMonthDifference, startDateSanitiser } from '../../helpers/timeline-helpers';

@Component({
  selector: 'cv-timeline',
  standalone: true,
  imports: [
    DatePipe, GetYearsAndMonthsPipe, CommonModule, TagModule
  ],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnChanges {
  @Input() start: number;
  @Input() end: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {}

  get startDate(): Date {
    return startDateSanitiser(this.start);
  }

  get endDate(): Date {
    return endDateSanitiser(this.end);
  }

  get currentlyEmployed() {
    return this.end ? false : true;
  }

  get duration() {
    return getMonthDifference(this.startDate, this.endDate);
  }
}
