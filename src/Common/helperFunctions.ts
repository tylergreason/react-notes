export function formatDate(date: Date) {
  date = new Date(date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`
}