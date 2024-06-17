export const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-3/4 bg-gradient-linear">
      <main className="flex flex-col items-center h-full gap-4 px-4 py-8">
        {children}
      </main>
    </div>
  )
}
