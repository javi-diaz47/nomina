'use client'

import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState } from 'react'
import { useEmployee } from '@/logic/hooks/useEmployees'

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
        <h2>Eliminar empleado</h2>
      </Header>
      <input value={search} placeholder="buscar" onChange={onSearch} />
      <ul className="w-full">
        {employees &&
          employees
            .filter(
              (e) =>
                (e.name + e.lastname).includes(search) || e.cc.includes(search)
            )
            .map((e) => (
              <Button key={e.id} className="w-full">
                {e.name} {e.lastname}
              </Button>
            ))}
      </ul>
    </Wrapper>
  )
}
