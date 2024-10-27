import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe';
import { TagModule } from 'primeng/tag';

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

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['currentlyEmployed'] || changes['end']) {}
    // console.log(this.currentlyEmployed);
  }

  get startDate(): Date {
    return new Date(this.start);
  }

  get endDate(): Date {
    return this.end ? new Date(this.end) : new Date(Date.now());
  }

  get currentlyEmployed() {
    return this.end ? false : true;
  }

  getMonthDifference(start: Date, end: Date): number {
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    return years * 12 + months;
  }
}
