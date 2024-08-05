import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe';

@Component({
  selector: 'cv-timeline',
  standalone: true,
  imports: [
    DatePipe, GetYearsAndMonthsPipe
  ],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnChanges {
  @Input() start: Date;
  @Input() end: Date;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentlyEmployed'] || changes['end']) {
    }
  }

  get startDate(): Date {
    return new Date(this.start);
  }

  get endDate(): Date {
    return this.end < this.start ? new Date() : new Date(this.end);
  }

  getMonthDifference(start: Date, end: Date): number {
    if (end < start) {end = new Date()};
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    return years * 12 + months;
  }
}
