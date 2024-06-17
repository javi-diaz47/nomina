'use client'

import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState } from 'react'
import { useEmployee } from '@/logic/hooks/useEmployees'
import { TrashIcon } from '../../../public/trash'
import { removeEmployee } from './removeEmployee'
import { useRouter } from 'next/navigation'

export default function DeleteEmployee() {
  const { isFetching, data: employees } = useEmployee()

  const [search, setSearch] = useState('')

  const router = useRouter()

  const onSearch = (ev) => {
    const newSearch = ev.target.value
    setSearch(newSearch)
  }

  if (isFetching) {
    return <p>Cargando...</p>
  }

  const onRemove = (id) => {
    removeEmployee(id)
    router.push('/empleado')
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
              <Button
                key={e.id}
                className="flex items-center justify-around w-full hover:scale-1 ">
                {e.name} {e.lastname}
                <button
                  onClick={() => onRemove(e.id)}
                  className="w-8 h-8 p-1 rounded-lg bg-primary hover:scale-105">
                  <TrashIcon />
                </button>
              </Button>
            ))}
      </ul>
    </Wrapper>
  )
}
