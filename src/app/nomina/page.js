'use client'

import Link from 'next/link'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'

export default function Simulation() {
  return (
    <Wrapper>
      <Header className=" border-black  border-[1px]">
        <h2>Nómina</h2>
      </Header>
      <nav className="grid h-full place-content-center">
        <ul className="flex flex-col gap-8 m-0">
          <li>
            <Button className="w-full max-w-xs rounded-full">
              <Link href="/crear-nomina">Crear nueva nómina</Link>
            </Button>
          </li>
          <li>
            <Button className="rounded-full">
              <Link href="/eliminar-nomina">ELiminar nómina</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}
