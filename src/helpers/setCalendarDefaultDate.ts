export function setCalendarDefaultDate() {
  const date = new Date();
  return date.toISOString().slice(0, 10);
}
