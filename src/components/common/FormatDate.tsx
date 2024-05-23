import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

// Function to get the ordinal suffix of a number
const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th'; // because 11th, 12th, 13th
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

// Function to format date
export const formatDate = (date: Date) => {
  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);
  return format(date, `EEEE, do 'of' MMMM, yyyy`, { locale: enUS })
    .replace('do', `${day}${ordinalSuffix}`);
};
