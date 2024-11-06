import {Component, Input, WritableSignal} from '@angular/core';
import {GetYearsAndMonthsPipe} from '../../pipes/work-experience.pipe';
import {DataService} from '../../services/data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ListItemComponent} from '../list-item/list-item.component';
import {IBioItem} from '../../interfaces/bio.interface';
import {CardModule} from 'primeng/card';


@Component({
  selector: 'cv-bio',
  standalone: true,
  imports: [
    GetYearsAndMonthsPipe,
    ListItemComponent,
    CardModule
  ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.less'
})

export class BioComponent {
  @Input() experience: number;
  bio: WritableSignal<IBioItem[]>;

  constructor(private ds: DataService) {
    //@ts-ignore
    this.bio = toSignal(this.ds.getBio());
  }
}
