'use client'
import { useUser } from '@/logic/hooks/useUser'
import { Wrapper } from '../components/Wrapper'
import { Header } from '../components/Header'
import { Button } from '../components/Buttons'
import { Input } from '../components/Input'
import { useState, useRef } from 'react'
import { postPayroll } from './action'
import { readCSV } from '@/logic/readCSV'
import { generatePayroll } from '@/logic/generatePayroll'
import exportFromJSON from 'export-from-json'
import { createClient } from '../../../persistence/supabase/client'

export default function nomina() {
  const { isFetching, data: user } = useUser()

  const [fileName, setFileName] = useState(undefined)

  const [payroll, setPayroll] = useState(undefined)

  const ref = useRef(null)

  const onAddFile = (ev) => {
    const newFile = ev.target.files[0]
    onGetRecords(newFile)
    setFileName(newFile.name)
  }

  const onGetRecords = async (file) => {
    const newRecords = await readCSV(file)

    onPayroll(newRecords)
  }

  const onPayroll = (records) => {
    const data = Object.keys(records).map((id) => {
      const payroll = generatePayroll(records[id])
      return payroll
    })

    setPayroll(data)
  }

  if (isFetching) {
    return <p>Cargando...</p>
  }

  const supabase = createClient()
  const onSubmit = (ev) => {
    ev.preventDefault()

    const formData = new FormData(ref.current)

    const payment = JSON.stringify(payroll)

    const data = {
      start: formData.get('start'),
      end: formData.get('end'),
      payroll: payment,
      profile_id: user.id,
    }

    const post = async (data) => {
      await supabase.from('payroll').insert([data])
    }

    post(data)

    exportFromJSON({
      data: payroll,
      fileName: `Nomina_${String(data.start)}_${String(data.end)}`,
      exportType: exportFromJSON.types.csv,
    })
  }

  return (
    <Wrapper>
      <div className="grid w-full p-2 mb-16 overflow-hidden">
        <Header className="overflow-hidden ">
          <h2>{'Crear nueva nomina'}</h2>
        </Header>
      </div>

      <form ref={ref} className="flex flex-col gap-12">
        <div className="flex ">
          <Input label="Fecha inicial" type="date" name="start" required />
          <Input label="Fecha final" type="date" name="end" required />
        </div>
        <div>
          <Button className="relative grid h-12 max-w-xs rounded-full place-content-center">
            <input
              onChange={onAddFile}
              className="absolute w-full px-6 py-2 not-italic text-center text-black uppercase transition-transform ease-in bg-white opacity-0"
              type="file"
              accept=".csv"
              required
            />
            {fileName ? 'Cargado' : 'Cargar archivo'}
          </Button>
        </div>
        <Button className="grid h-12 max-w-xs rounded-full place-content-center bg-highlight">
          <button type="submit" onClick={onSubmit}>
            Generar comprobante
          </button>
        </Button>
      </form>
    </Wrapper>
  )
}
