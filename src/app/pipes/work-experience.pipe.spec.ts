import { GetYearsAndMonthsPipe } from './work-experience.pipe';

describe('WorkExperiencePipe', () => {
  it('create an instance', () => {
    const pipe = new GetYearsAndMonthsPipe();
    expect(pipe).toBeTruthy();
  });
});
