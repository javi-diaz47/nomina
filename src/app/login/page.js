import { Button } from '../components/Buttons'
import { Input } from '../components/Input'
import { Wrapper } from '../components/Wrapper'

export default function Login() {
  return (
    <Wrapper>
      <main className="flex flex-col items-center h-full gap-4 px-4 py-8">
        <header className="w-full mb-16">
          <Button className="w-full max-w-full hover:scale-1">
            <h2 className="text-2xl">Iniciar sesión</h2>
          </Button>
        </header>
        <form className="flex flex-col justify-center w-full gap-8 h-fit">
          <Input label="Usuario" name="user" />
          <Input label="CONTRASEÑA" name="password" />
        </form>
        <p>OLVIDÉ MI CONTRASEÑA</p>
      </main>
    </Wrapper>
  )
}
