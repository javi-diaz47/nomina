import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'

export default function Login() {
  return (
    <Wrapper>
      <Header>
        <h2>Iniciar sesión</h2>
      </Header>
      <form className="flex flex-col justify-center w-full gap-8 h-fit">
        <Input label="Usuario" name="user" />
        <Input label="CONTRASEÑA" name="password" />
      </form>
      <p>OLVIDÉ MI CONTRASEÑA</p>
    </Wrapper>
  )
}
