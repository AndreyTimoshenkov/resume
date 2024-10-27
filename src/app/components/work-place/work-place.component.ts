import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TimelineComponent } from '../timeline/timeline.component';
import { StackComponent } from '../stack/stack.component';
import { ITech } from '../../interfaces/tech.interface';
import { ICompany } from '../../interfaces/company.interface';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'cv-work-place',
  standalone: true,
  imports: [
    CardModule, AvatarModule, TimelineComponent, StackComponent, CompanyComponent
  ],
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPlaceComponent implements OnChanges{
  @Input() company: ICompany;
  @Input() start: number;
  @Input() end: number | undefined;
  @Input() responsibilities: string | string[];
  @Input() position: string;
  @Input() stack: ITech[];

  ngOnChanges(): void {}
}
