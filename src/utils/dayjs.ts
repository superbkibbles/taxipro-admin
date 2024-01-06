// @TOOO REPLACE MOMENT WITH DAYJS IN FUTURE
// import Dayjs from 'dayjs'
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import isBetween from "dayjs/plugin/isBetween";
import { dateFormat, dateTimeFormat } from "@/constants";
import dayjs from "dayjs";

import "dayjs/locale/sv";
//import { TIMEZONE } from "./constants";
// @TOOO REPLACE IN FUTURE
dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(isBetween);
dayjs.extend(updateLocale);

dayjs.locale("sv");

dayjs.tz.setDefault("Europe/Stockholm");

export const formattedDate = (
  date?: string | number | dayjs.Dayjs | Date | null | undefined
) => (date ? dayjs(date).format(dateFormat) : "");

export const formattedDateTime = (
  date?: string | number | dayjs.Dayjs | Date | null | undefined
) => dayjs(date).format(dateTimeFormat);

export const getDateWithDayAndMonth = (date: string) => {
  return dayjs(date)
    .format("LLLL")
    ?.split(" ")
    .reverse()
    .slice(1)
    ?.reverse()
    ?.join(" ");
};

export default dayjs;
