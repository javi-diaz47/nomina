import { twMerge } from 'tailwind-merge'

export const Input = ({
  label,
  name,
  className = '',
  value = '',
  type = 'text',
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center gap-2 italic',
        className
      )}>
      <label>{label}</label>
      <input
        className="w-3/4 h-8 p-2 rounded-3xl"
        name={name}
        defaultValue={value}
        type={type}
        required
      />
    </div>
  )
}
