import { HOUR_DELIMETER, WEEKDAY } from '@/app/constants'

export const getHourFromString = (hourString) => {
  const [hour, minute] = hourString.split(HOUR_DELIMETER)
  return Number(hour) + Number(minute) / 60
}

export const getDay = (date) => {
  return WEEKDAY[new Date(date).getDay()]
}
