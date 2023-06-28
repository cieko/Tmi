import './globals.css'
import { Figtree } from 'next/font/google'

// ===== Components =========
import Sidebar from '@/components/Sidebar'

const font = Figtree({ subsets: ['latin'] })
// the constant should be named ' font ' to make it customizable

export const metadata = {
  title: 'Spotify-clone',
  description: 'Listen to Darshan Raval!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
        {children}
        </Sidebar>
      </body>
    </html>
  )
}
