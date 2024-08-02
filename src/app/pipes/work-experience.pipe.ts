import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'getYearsAndMonths',
  standalone: true,
})
export class GetYearsAndMonthsPipe implements PipeTransform {
	transform(workExperience: number): string {
		let result = '';
		const months = workExperience % 12;
		const years = (workExperience - months) / 12;

		const yearsString = pluralise(years, ['год', 'года', 'лет']);
		const monthsString = pluralise(months, ['месяц', 'месяца', 'месяцев']);

		if (months === 0 && years === 0) {
			result = 'Нет опыта';
		} else if (yearsString === '') {
			result = monthsString;
		} else result = yearsString + ' ' + monthsString;

		return result;
	}
}

export function pluralise(term: number, array: Array<string>) {
	if (term === 0) return '';
	let result = `${term} `;
	if (term % 10 === 1) {
		result += array[0];
	} else if (term % 10 >= 2 && term % 10 < 5) {
		result += array[1];
	} else if (term % 10 >= 5 || term % 10 === 0) {
		result += array[2];
	}
	return result;
}
