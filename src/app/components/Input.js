export const Input = ({ label, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-xl italic">
      <label>{label}</label>
      <input className="w-1/2 p-2 rounded-3xl" name={name} required />
    </div>
  )
}
