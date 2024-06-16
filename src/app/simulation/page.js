'use client'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState, useEffect } from 'react'
import {
  CSV_DELIMETER,
  DELIMETER,
  END_DAY,
  HOUR_DELIMETER,
  NEWLINE,
  NIGHT_SURCHARGE,
  WEEKDAY,
} from '../constants'
import { Button } from '../components/Buttons'

export default function Simulation() {
  const [file, setFile] = useState(undefined)

  const onAddFile = (ev) => {
    const newFile = ev.target.files[0]

    setFile(newFile)
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const fileURL = URL.createObjectURL(file)

    const response = await fetch(fileURL)

    console.log(fileURL)
    const res = await response.text()

    const rows = res.split(NEWLINE)

    const headers = rows.shift()

    console.log(headers)
    const map = new Map()
    //  'Identificación,Apellido,Nombre,Día,Entrada,Salida Break,Entrada Break,Minutos Break,Salida,Horas Trabajadas'
    // rows.forEach()
    const getDay = (date) => {
      return WEEKDAY[new Date(date).getDay()]
    }

    await rows.forEach((line) => {
      line = line.split(CSV_DELIMETER)
      console.log(line)
      const record = {
        id: line[0],
        name: [line[2], line[1]].join(' '),
        date: line[3],
        day: getDay(line[3]),
        entry: line[4],
        break: line[7],
        departure: line[8],
        hours: line[9],
      }

      const getHourFromString = (hourString) => {
        const [hour, minute] = hourString.split(HOUR_DELIMETER)
        return Number(hour) + Number(minute) / 60
      }

      if (record.entry) {
        const entryHour = getHourFromString(record.entry)
        const breakHour = getHourFromString(record.break)
        const depHour = getHourFromString(record.departure)

        console.log([entryHour, breakHour, depHour])
      }
      const newRecords = [...(map.get(record.id) || []), record]
      map.set(record.id, newRecords)
    })

    console.log(map)
  }

  return (
    <Wrapper>
      <Header className=" border-black bg-primary border-[1px]">
        <h2>
          simulador de <br></br> nómina
        </h2>
      </Header>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input onChange={onAddFile} type="file" accept=".csv" required />
        <button>Generar</button>
      </form>
    </Wrapper>
  )
}
