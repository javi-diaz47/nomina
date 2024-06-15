import { twMerge } from 'tailwind-merge'

export const Button = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-sm px-6 py-2 font-bold text-black bg-white uppercase font-extrabold transition-transform ease-in',
        'hover:scale-105',
        className
      )}>
      {children}
    </div>
  )
}
