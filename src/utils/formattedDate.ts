import moment from "moment";

/*
 * Convert date to jalali date
 *
 * @param {string | number | Date} date
 * @returns {string | number | Date} jalali
 */

export function formattedDate(date: Date | number | string) {
  let jalali: number | string | Date;
  if (typeof date != "string") {
    jalali = new Intl.DateTimeFormat("fa-IR").format(date);
  } else {
    jalali = moment(date).format("jYYYY/jM/jD");
  }

  return jalali;
}

/*
 * Convert date to time
 *
 * @param {string | number | Date} date
 * @returns {string | number | Date} time
 */

export function formattedTime(date: Date | number | string) {
  let time: number | string | Date;
  if (typeof date != "string") {
    time = new Intl.DateTimeFormat("fa-IR", {
      timeStyle: "short",
      hour12: false,
    }).format(date);
  } else {
    time = moment(date).format("HH:mm");
  }

  return time;
}
