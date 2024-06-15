import { twMerge } from 'tailwind-merge'

export const Button = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        'w-48 px-6 py-2 font-bold text-black bg-white capitalize transition-transform ease-in',
        'hover:scale-105',
        className
      )}>
      {children}
    </div>
  )
}
