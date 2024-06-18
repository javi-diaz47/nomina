'use client'

import { CSV_DELIMETER, NEWLINE } from '@/app/constants'
import { getDay } from '@/app/utils/genSimulation'

export const readCSV = async (file) => {
  const records = new Map()

  const fileURL = URL.createObjectURL(file)

  const response = await fetch(fileURL)

  const res = await response.text()

  const rows = res.split(NEWLINE)

  const _ = rows.shift()

  const newRecords = new Map()

  await rows.forEach((line) => {
    line = line.split(CSV_DELIMETER)

    const record = {
      id: line[0],
      name: [line[2], line[1]].join(' '),
      date: line[3],
      day: getDay(line[3]),
      workStart: line[4],
      breakStart: line[5],
      breakEnd: line[6],
      workEnd: line[8],
      hours: line[9],
    }

    if (record.id) {
      if (!newRecords[record.id]) {
        records[record.id] = [record]
      } else {
        records[record.id].push(record)
      }
    }
  })

  return records
}
