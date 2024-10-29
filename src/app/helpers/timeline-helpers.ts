export function getMonthDifference(start: Date, end: Date): number {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  return years * 12 + months;
}

export function startDateSanitiser(start: number): Date {
  return new Date(start);
}

export function endDateSanitiser(end?: number): Date {
  return end ? new Date(end) : new Date(Date.now());
}