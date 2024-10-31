import { Pipe, PipeTransform } from '@angular/core';
import { pluralise } from './work-experience.pipe';

@Pipe({
	name: 'getYears',
  standalone: true,
})
export class getYears implements PipeTransform {
	transform(workExperience: number): string {
		const months = workExperience % 12;
		const years = (workExperience - months) / 12;
		const yearsString = pluralise(years, ['год', 'года', 'лет']);

		return yearsString;
	}
}
