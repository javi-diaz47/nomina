'use client'

import { createClient } from '../../../persistence/supabase/client'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'
import { login, signup } from './actions'

export default function Login() {
  const handleLoginWithOAuth = () => {
    const supabase = createClient()

    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: location.origin + '/auth/callback',
      },
    })
  }
  return (
    <Wrapper>
      <Header className="grid h-16 mb-16 place-content-center">
        <h2>Iniciar sesión</h2>
      </Header>

      <Button className="grid h-12 rounded-full cursor-pointer place-content-center">
        <button onClick={handleLoginWithOAuth}>Ingresar</button>
      </Button>
    </Wrapper>
  )
}
