import { Button } from './components/Buttons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full text-xl text-center min-w-max">
      <nav className="grid h-full place-content-center">
        <ul className="flex flex-col gap-8 m-0">
          <li>
            <Button>
              <Link href="/login">iniciar sesión</Link>
            </Button>
          </li>
          <li>
            <Button className="bg-highlight">
              <Link href="/register">registrar usuario</Link>
            </Button>
          </li>
          <li>
            <Button className="bg-primary">
              <Link href="/simulation">
                simulador de <br></br> nómina
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </main>
  )
}
