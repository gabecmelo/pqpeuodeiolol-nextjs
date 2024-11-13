import type { Metadata } from 'next'
 
import './globals.css'
 
export const metadata: Metadata = {
  title: 'Pqp eu odeio lol',
  description: 'Aqui você encontra tudo que odeia sobre o jogo League of Legends',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}