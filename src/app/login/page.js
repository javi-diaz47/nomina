'use client'

import { createClient } from '../../../persistence/supabase/client'
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
      <Header>
        <h2>Iniciar sesión</h2>
      </Header>
      <form className="flex flex-col justify-center w-full gap-8 h-fit">
        <Input label="Usuario" name="email" />
        <Input label="CONTRASEÑA" name="password" type="password" />
      </form>
      <button onClick={handleLoginWithOAuth}>Log in</button>

      <p>OLVIDÉ MI CONTRASEÑA</p>
    </Wrapper>
  )
}
