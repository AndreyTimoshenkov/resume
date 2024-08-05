import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'cv-work-place',
  standalone: true,
  imports: [
    CardModule, AvatarModule, TimelineComponent
  ],
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPlaceComponent implements OnChanges{
  @Input() company: string;
  @Input() start: Date;
  @Input() end: Date;
  // @Input() currentlyEmployed: boolean;
  @Input() description: string;
  @Input() position: string;

  ngOnChanges(): void {
    // console.log(this.currentlyEmployed)
  }
}
