'use client'

import { useUser } from '@/logic/hooks/useUser'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'
import { register } from './actions'

export default function RegistrarEmpleado() {
  const { isFetching, data: user } = useUser()

  if (isFetching) {
    return <p>Cargando...</p>
  }

  const enterpriseId = user['enterprise_id']

  return (
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-4">
        <h2>Modificar empleado</h2>
      </Header>

      <form action={register} className="flex flex-col gap-4">
        <div className="flex">
          <Input label="Primer nombre" name="first-name" />
          <Input label="Segundo nombre" name="second-name" />
        </div>

        <div className="flex">
          <Input label="Primer apellido" name="first-lastname" />
          <Input label="Segundo apellido" name="second-lastname" />
        </div>

        <div className="flex">
          <Input label="Cédulacedula" name="cc" />
          <Input label="Número de contacto" name="phone" />
        </div>

        <Button className="grid w-full h-12 max-w-full rounded-full cursor-pointer place-content-center">
          <button type="submit">Guardar</button>
        </Button>
      </form>
    </Wrapper>
  )
}
