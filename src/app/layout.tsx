import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="flex min-h-screen flex-col">
        <Nav />
        {children}
      </div>
    </html>
  )
}
