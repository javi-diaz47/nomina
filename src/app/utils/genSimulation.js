// Function to convert hours and minutes to decimal hours

import {
  DAY_END_HOUR,
  HOUR_DELIMETER,
  WEEKDAY,
  DAY_SURCHARGE,
  NIGHT_SURCHARGE,
  NIGHT_END_HOUR,
} from '../constants'

export const getHourFromString = (hourString) => {
  const [hour, minute] = hourString.split(HOUR_DELIMETER)
  return Number(hour) + Number(minute) / 60
}

export const getDay = (date) => {
  return WEEKDAY[new Date(date).getDay()]
}

export const getPayroll = (records) => {
  const res = records.map((rec) => {
    const { workStart, workEnd, breakStart, breakEnd } = rec

    const { day, night } = calculateWorkedHours({
      workStart,
      workEnd,
      breakStart,
      breakEnd,
    })
    // console.log(day + night, rec.hours)
    return day * DAY_SURCHARGE + night * NIGHT_SURCHARGE
  })

  const payroll = res.reduce((a, b) => a + b, 0)

  if (isNaN(payroll)) {
    console.warn('workEnd must be registered', records[id])
  }

  return payroll
}

export const calculateWorkedHours = ({
  workStart,
  workEnd,
  breakStart,
  breakEnd,
}) => {
  workStart = getHourFromString(workStart)
  workEnd = getHourFromString(workEnd)
  breakStart = getHourFromString(breakStart)
  breakEnd = getHourFromString(breakEnd)

  if (workEnd < workStart) {
    workEnd += 24
  }
  if (breakStart < workStart) {
    breakStart += 24
  }

  if (breakEnd < workStart) {
    breakEnd += 24
  }

  // ws bs be we 21
  breakStart = isNaN(breakStart) ? 0 : breakStart
  breakEnd = isNaN(breakEnd) ? 0 : breakEnd

  if (workEnd < DAY_END_HOUR) {
    return {
      day: breakStart - workStart + (workEnd - breakEnd),
      night: 0,
    }
  }

  // ws bs be 21 we
  if (breakEnd < DAY_END_HOUR && workEnd > DAY_END_HOUR) {
    return {
      day: breakStart - workStart + (DAY_END_HOUR - breakEnd),
      night: workEnd - DAY_END_HOUR,
    }
  }

  // ws bs 21 be we
  if (breakStart < DAY_END_HOUR && breakEnd > DAY_END_HOUR) {
    return {
      day: breakStart - workStart,
      night: workEnd - breakEnd,
    }
  }

  // ws 21 bs be we
  if (workStart < DAY_END_HOUR && breakStart > DAY_END_HOUR) {
    return {
      day: DAY_END_HOUR - workStart,
      night: breakStart - DAY_END_HOUR + (workEnd - breakEnd),
    }
  }

  // **** workStart after 21 ****
  // 21 ws bs be we 30
  if (workStart > DAY_END_HOUR && workEnd < NIGHT_END_HOUR) {
    return {
      day: 0,
      night: breakStart - workStart + (workEnd - breakEnd),
    }
  }

  // 21 ws bs be 30 we
  if (breakEnd < NIGHT_END_HOUR && workEnd > NIGHT_END_HOUR) {
    return {
      day: workEnd - NIGHT_END_HOUR,
      night: breakStart - workStart + (NIGHT_END_HOUR - breakEnd),
    }
  }

  // 21 ws bs 30 be  we
  if (breakStart < NIGHT_END_HOUR && breakEnd < NIGHT_END_HOUR) {
    return {
      day: workEnd - breakEnd,
      night: breakStart - workStart,
    }
  }

  // 21 ws 30 bs  be  we
  if (workStart < NIGHT_END_HOUR && breakStart > NIGHT_END_HOUR) {
    return {
      day: breakStart - NIGHT_END_HOUR + (workEnd - breakEnd),
      night: NIGHT_END_HOUR - workStart,
    }
  }

  // 21 30 ws bs  be  we <-- It's already handled
}
