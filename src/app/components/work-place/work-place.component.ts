import { Component, Input, OnChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TimelineComponent } from '../timeline/timeline.component';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cv-work-place',
  standalone: true,
  imports: [
    CardModule, AvatarModule, TimelineComponent
  ],
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.less',
  // providers: [HttpClient]
})
export class WorkPlaceComponent implements OnChanges{
  @Input() header: string;
  @Input('start') startDate: Date | string;
  @Input('end') endDate: Date | string;
  @Input('description') description: string;

  ngOnChanges(): void {
    console.log(this.startDate, this.endDate)
  }
}
