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

export const monthsEng = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const formatDate = (date: string, locale: number) => {
  const [year, month, day] = date.split(' ')[0].split('-').map(Number);
  const monthLocalize = locale === 1 ? months[month - 1] : monthsEng[month - 1];

  return `${day} ${monthLocalize} ${year}`;
};

export const formatDateWithTime = (date: string, locale: number) => {
  const [year, month, day] = date.split(' ')[0].split('-').map(Number);
  const monthLocalize = locale === 1 ? months[month - 1] : monthsEng[month - 1];

  const [hours, min] = date.split(' ')[1].split(':');
  return `${day} ${monthLocalize} ${year} ${hours}:${min}`;
};
