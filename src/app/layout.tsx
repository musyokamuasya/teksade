
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <main className='h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
