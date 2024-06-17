'use client'
import Link from 'next/link'
import { useUser } from '@/logic/hooks/useUser'
import { Wrapper } from '../components/Wrapper'
import { Header } from '../components/Header'
import { Button } from '../components/Buttons'
import { useState } from 'react'
import { NEWLINE, CSV_DELIMETER } from '../constants'
import { getDay, getPayroll } from '../utils/genSimulation'

export default function Home() {
  const { isFetching, data: user } = useUser()

  if (isFetching) {
    return <p>Cargando...</p>
  }
  if (user?.id) {
    return (
      <Wrapper>
        <div className="grid w-full p-2 overflow-hidden ">
          <Header className="overflow-hidden truncate ">
            <h2>Nomina</h2>
          </Header>
        </div>

        <nav className="grid h-full place-content-center">
          <ul className="flex flex-col w-full gap-8 m-0">
            <li>
              <Button className="grid h-16 max-w-xs rounded-full place-content-center ">
                <Link href="crear-nomina">Crear nueva nomina</Link>
              </Button>
            </li>
            <li>
              <Button className="grid h-16 max-w-xs rounded-full w-80 place-content-center ">
                <Link href="delete_n">Eliminar nomina</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </Wrapper>
    )
  }
}export default function Simulation() {
  const [records, setRecords] = useState(new Map())

  const [fileName, setFileName] = useState(undefined)

  const onAddFile = (ev) => {
    const newFile = ev.target.files[0]
    onGetRecords(newFile)
    setFileName(newFile.name)
  }

  const onGetRecords = async (file) => {
    const fileURL = URL.createObjectURL(file)

    const response = await fetch(fileURL)

    const res = await response.text()

    const rows = res.split(NEWLINE)

    let _ = rows.shift()

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
        // Add record to the map
        if (!newRecords[record.id]) {
          newRecords[record.id] = [record]
        } else {
          newRecords[record.id].push(record)
        }
      }
    })

    setRecords(newRecords)
  }

  const onPayroll = () => {
    Object.keys(records).forEach((id) => {
      const payroll = getPayroll(records[id])

      console.log(payroll, id)
    })
  }

  return (
    <Wrapper>
      <Header className=" border-black bg-primary border-[1px]">
        <h2>
          simulador de <br></br> nómina
        </h2>
      </Header>
      <div className="flex flex-col items-center w-full h-full gap-8 place-content-center">
        <Button className="relative grid h-16 max-w-xs rounded-full place-content-center">
          <input
            onChange={onAddFile}
            className="absolute w-full px-6 py-2 not-italic text-center text-black uppercase transition-transform ease-in bg-white opacity-0"
            type="file"
            accept=".csv"
            required />
          {fileName ? 'Cargado' : 'Cargar archivo'}
        </Button>
        <Button className="grid h-16 max-w-xs rounded-full place-content-center ">
          <button onClick={onPayroll}>Generar comprobante</button>
        </Button>
      </div>
    </Wrapper>
  )
}

