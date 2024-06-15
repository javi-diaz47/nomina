import Image from 'next/image'
import { Button } from './components/Buttons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Esta pagina esta hecha por Jhon y andrea la mas bonita XD;
        </p>
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Button>
                <Link href="/login">iniciar sesión</Link>
              </Button>
            </li>
            <li>
              <Button className="bg-secondary">
                <Link href="/register">registrar usuario</Link>
              </Button>
            </li>
            <li>
              <Button className="bg-primary">
                <Link href="/simulation">simulador de nómina</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
