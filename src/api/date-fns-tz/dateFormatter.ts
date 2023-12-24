import {formatRelative, parseISO} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import {tr} from 'date-fns/locale';
import {MessageSchema} from '../../app/pages/Messages/Messages';
// Time Zone List reference (extracted using Excel)
// https://docs.oracle.com/middleware/12211/wcs/tag-ref/MISC/TimeZones.html
import zones from './timeZoneIDLabels.json';

const zoned = (date: Date) => utcToZonedTime(date, zones['Europe/Istanbul'].id);
// https://date-fns.org/

export const formattedDate = (message: MessageSchema) =>
  formatRelative(zoned(parseISO(message.date)), zoned(new Date()), {
    // addSuffix: true,
    locale: tr,
  });
