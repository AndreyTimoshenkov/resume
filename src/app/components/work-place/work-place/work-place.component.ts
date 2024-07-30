import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'cv-work-place',
  standalone: true,
  imports: [
    CardModule, AvatarModule
  ],
  templateUrl: './work-place.component.html',
  styleUrl: './work-place.component.less'
})
export class WorkPlaceComponent {
  @Input() header: string;
}
