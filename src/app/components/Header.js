import { twMerge } from 'tailwind-merge'
import { Button } from './Buttons'

export const Header = ({ children, className = '' }) => {
  return (
    <header className="flex items-center justify-center w-full">
      <Button
        className={twMerge(
          'w-full text-2xl hover:scale-1 flex items-center justify-center cursor-pointer',
          className
        )}>
        {children}
      </Button>
    </header>
  )
}
