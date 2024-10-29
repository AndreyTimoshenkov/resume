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
	if (term === 0) { return '';  }

	let result = `${term} `;

  switch (true){
    case (term % 10 === 1 && term < 10):
      result += array[0];
      break;
    case (term % 10 >= 5 || term % 10 === 0 || term > 10 && term < 20):
      result += array[2];
      break;
    case (term % 10 >= 2 && term % 10 < 5):
      result += array[1];
      break;
  }

	return result;
}
