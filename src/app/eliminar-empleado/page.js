'use client'

import { createClient } from '../../../persistence/supabase/client'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'

export default function DeleteEmployee() {
  const handleLoginWithOAuth = () => {
    const supabase = createClient()

    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: location.origin + '/auth/callback',
      },
    })
  }

  const [search, setSearch] = useState('')

  return (
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-4">
        <h2>Eliminar empleado</h2>
      </Header>

      <input />
      <ul>Empleados..</ul>
    </Wrapper>
  )
}
