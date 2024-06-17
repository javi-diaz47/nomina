import { twMerge } from 'tailwind-merge'
import { Button } from './Buttons'

export const Header = ({ children, className = '' }) => {
  return (
    <header className="w-full ">
      <Button className={twMerge('w-full text-2xl hover:scale-1', className)}>
        {children}
      </Button>
    </header>
  )
}
