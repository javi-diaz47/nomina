import { DAY_SURCHARGE, NIGHT_SURCHARGE } from '@/app/constants'
import { calculateWorkedHours } from './calculateWorkedHours'

export const generatePayroll = (records) => {
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

  return {
    id: records[0].id,
    name: records[0].name,
    payment: payroll,
  }
}
