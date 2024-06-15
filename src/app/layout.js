import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center w-full h-screen bg-foreground">
        {children}
      </body>
    </html>
  )
}
