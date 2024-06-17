'use client'

import { createClient } from '../../../persistence/supabase/client'
import { Button } from '../components/Buttons'
import { Header } from '../components/Header'
import { Wrapper } from '../components/Wrapper'

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
    <Wrapper className="flex justify-center">
      <Header className="h-16 mb-16">
        <h2>Iniciar sesión</h2>
      </Header>

      <Button className="grid h-12 rounded-full cursor-pointer place-content-center">
        <button onClick={handleLoginWithOAuth}>Ingresar con Google</button>
      </Button>
    </Wrapper>
  )
}
