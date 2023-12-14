import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='w-screen h-screen'>
        {children}
        </main>
        

        <Image className='-z-50 bg-cover bg-center'
          src="/BackGroundWater.jpg"
          alt="Vercel Logo"
          fill
          priority
        />
      </body>
    </html>
  )
}
