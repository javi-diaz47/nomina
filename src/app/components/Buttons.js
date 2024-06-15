import { twMerge } from 'tailwind-merge'

export const Button = ({ children, className = '' }) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-sm px-6 py-2 text-center not-italic text-black bg-white uppercase transition-transform ease-in',
        'hover:scale-105',
        className
      )}>
      {children}
    </div>
  )
}
