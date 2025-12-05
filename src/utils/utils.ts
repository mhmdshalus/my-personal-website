export function getExperienceYears(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();

  const notReachedAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

  if (notReachedAnniversary) years -= 1;

  return years;
}
