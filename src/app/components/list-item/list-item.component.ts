import { Component, Input, OnChanges } from '@angular/core';
import { IBioItem } from '../../interfaces/bio.interface';
import { NgIf } from '@angular/common';
import { getMonthDifference } from '../../helpers/timeline-helpers';
import { GetYearsAndMonthsPipe } from '../../pipes/work-experience.pipe';
import { getYears } from "../../pipes/getYearsPipe";


@Component({
  selector: 'cv-list-item',
  standalone: true,
  imports: [
    NgIf, GetYearsAndMonthsPipe,
    getYears
],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.less',
})
export class ListItemComponent implements OnChanges {

  ngOnChanges(): void {
    if (this.listItem.label === 'Дата рождения:') {
      this.age = getMonthDifference(this.dateOfBirth, new Date());
    }

    if (this.listItem.label === 'Опыт работы:') {
      this._experience = this.experience;
    }
  }

  @Input() listItem: IBioItem;
  @Input() experience: number;

  _experience: number;
  age: number;

  get dateOfBirth() {
    const [day, month, year] = this.listItem.text.split('.').map(Number);
    return new Date(year, month - 1, day);
  }
}
