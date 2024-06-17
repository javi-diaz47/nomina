'use client'

import { Button } from '../../components/Buttons'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Wrapper } from '../../components/Wrapper'
import { register } from './actions'
import { useRouter } from 'next/navigation'
import { useEmployeeById } from '@/logic/hooks/useEmployeesById'

export default function ModificarEmpleado() {
  const router = useRouter()

  const { isFetching, data: employee } = useEmployeeById(router.query.id)

  if (isFetching) {
    return <p>Cargando...</p>
  }

  return (
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-4">
        <h2>Modificar empleado</h2>
      </Header>

      <form action={register} className="flex flex-col gap-4">
        <div className="flex">
          <Input
            value={employee['first-name']}
            label="Primer nombre"
            name="first-name"
          />
          <Input
            value={employee['second-name']}
            label="Segundo nombre"
            name="second-name"
          />
        </div>

        <div className="flex">
          <Input
            value={employee['first-lastname']}
            label="Primer apellido"
            name="first-lastname"
          />
          <Input
            value={employee['second-lastname']}
            label="Segundo apellido"
            name="second-lastname"
          />
        </div>

        <div className="flex">
          <Input value={employee['cc']} label="Cédulacedula" name="cc" />
          <Input
            value={employee['phone']}
            label="Número de contacto"
            name="phone"
          />
        </div>

        <Button className="grid w-full h-12 max-w-full rounded-full cursor-pointer place-content-center">
          <button type="submit">Guardar</button>
        </Button>
      </form>
    </Wrapper>
  )
}
