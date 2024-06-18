'use client'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState } from 'react'
import { getPayroll } from '../utils/genSimulation'
import { Button } from '../components/Buttons'
import exportFromJSON from 'export-from-json'
import { readCSV } from '@/logic/readCSV'
import { generatePayroll } from '@/logic/generatePayroll'

export default function Simulation() {
  const [records, setRecords] = useState()

  const [fileName, setFileName] = useState(undefined)

  const onAddFile = (ev) => {
    const newFile = ev.target.files[0]
    onGetRecords(newFile)
    setFileName(newFile.name)
  }

  const onGetRecords = async (file) => {
    const newRecords = await readCSV(file)

    setRecords(newRecords)
  }

  const onPayroll = () => {
    const data = Object.keys(records).map((id) => {
      const payroll = generatePayroll(records[id])
      return payroll
    })

    exportFromJSON({
      data,
      fileName: 'Mi-Nomina',
      exportType: exportFromJSON.types.csv,
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
            required
          />
          {fileName ? 'Cargado' : 'Cargar archivo'}
        </Button>
        <Button className="grid h-16 max-w-xs rounded-full place-content-center ">
          <button onClick={onPayroll}>Generar comprobante</button>
        </Button>
      </div>
    </Wrapper>
  )
}
