import { twMerge } from 'tailwind-merge'

export const Button = ({ children, className = '' }) => {
  return (
    <div
      className={twMerge(
        'w-full italic text-xl max-w-sm px-6 py-2 text-center text-black bg-white uppercase transition-transform ease-in',
        'hover:scale-105',
        className
      )}>
      {children}
    </div>
  )
}
