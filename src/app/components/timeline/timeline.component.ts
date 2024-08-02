import { ChangeDetectionStrategy, Component, computed, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe'

@Component({
  selector: 'cv-timeline',
  standalone: true,
  imports: [
    DatePipe, GetYearsAndMonthsPipe
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {

  _startDate: Date;
  _endDate: Date;

  @Input('start') set startDate(value: Date | string) {
    typeof value === 'string'
      ? this._startDate = new Date(value)
      : this._startDate = value;
  }

  @Input('end') set endDate(value: Date | string) {
    typeof value === 'string'
      ? this._endDate = value
          ? new Date(value)
          : new Date(Date.now())
      : this._endDate = value
  }

  getMonthDifference(start: Date, end: Date): number {
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    return years * 12 + months;
  }
}
