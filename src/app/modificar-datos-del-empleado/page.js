'use client'

import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState } from 'react'
import { useEmployee } from '@/logic/hooks/useEmployees'
import Link from 'next/link'

export default function DeleteEmployee() {
  const { isFetching, data: employees } = useEmployee()

  const [search, setSearch] = useState('')

  const onSearch = (ev) => {
    const newSearch = ev.target.value
    setSearch(newSearch)
  }

  if (isFetching) {
    return <p>Cargando...</p>
  }

  return (
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-4">
        <h2>Selecciona empleado</h2>
      </Header>
      <input value={search} placeholder="buscar" onChange={onSearch} />
      <ul className="w-full scroll">
        {employees &&
          employees
            .filter(
              (e) =>
                (e.name + e.lastname).includes(search) || e.cc.includes(search)
            )
            .map((e) => (
              <Button key={e.id} className="w-full">
                <Link
                  href={{
                    pathname: '/modificar-empelado',
                    query: { id: e.id },
                  }}>
                  {e.name} {e.lastname}
                </Link>
              </Button>
            ))}
      </ul>
    </Wrapper>
  )
}
