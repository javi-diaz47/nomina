'use client'
import Link from 'next/link'
import { useUser } from '@/logic/hooks/useUser'
import { Wrapper } from '../components/Wrapper'
import { Header } from '../components/Header'
import { Button } from '../components/Buttons'

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
            <h2>{user.email}</h2>
          </Header>
        </div>

        <nav className="grid h-full place-content-center">
          <ul className="flex flex-col w-full gap-8 m-0">
            <li>
              <Button className="grid h-16 max-w-xs rounded-full place-content-center ">
                <Link href="payroll">Nómina</Link>
              </Button>
            </li>
            <li>
              <Button className="grid h-16 max-w-xs rounded-full w-80 place-content-center ">
                <Link href="employee">Empleado</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </Wrapper>
    )
  }
}
