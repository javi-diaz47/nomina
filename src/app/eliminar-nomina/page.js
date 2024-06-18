'use client'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { useState } from 'react'
import { TrashIcon } from '../../../public/trash'
import { removePayroll } from './removePayroll'
import { useRouter } from 'next/navigation'
import { usePayroll } from '@/logic/hooks/usePayroll'

export default function DeleteEmployee() {
  const { isFetching, data: employees } = usePayroll()

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
    removePayroll(id)
    router.push('/nomina')
  }

  return (
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-4">
        <h2>Eliminar nomina</h2>
      </Header>
      <input
        className="w-3/4 p-2 "
        value={search}
        placeholder="buscar"
        onChange={onSearch}
      />
      <ul className="grid w-full gap-2 overflow-y-scroll">
        {employees &&
          employees
            .filter((e) => e.start.includes(search) || e.end.includes(search))
            .map((e) => (
              <Button
                key={e.id}
                className="flex items-center justify-around w-full hover:scale-1 ">
                {e.start} {e.end}
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
