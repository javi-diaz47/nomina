import { twMerge } from 'tailwind-merge'
import { Button } from './Buttons'

export const Header = ({ children, className = '', classHeader=''}) => {
  return (
    <header className={twMerge("flex items-center justify-center w-full",classHeader)}>
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
