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
        <h2>Registrar empleado</h2>
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

        <div className="flex flex-col items-center justify-center gap-2 text-base italic">
          <label>ID de la empresa</label>
          <input
            className="w-1/2 h-8 p-2 text-gray-800 rounded-3xl"
            name={'enterprise_id'}
            value={enterpriseId}
          />
        </div>
        <Button className="grid w-full h-12 max-w-full rounded-full cursor-pointer place-content-center">
          <button type="submit">Crear</button>
        </Button>
      </form>
    </Wrapper>
  )
}
