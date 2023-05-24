// import { parseISO, format } from 'date-fns';
import dayjs from 'dayjs'

export default function Date({ dateString }) {
//   const date = parseISO(dateString);
  return <time dateTime={dateString}>{dayjs(dateString).format('MMMM d, YYYY')}</time>;
}