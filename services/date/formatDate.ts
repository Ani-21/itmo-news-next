export const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const formatDate = (date: string) => {
  const [year, month, day] = date.split(' ')[0].split('-').map(Number);

  return `${day} ${months[month - 1]} ${year}`;
};
