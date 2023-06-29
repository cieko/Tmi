import './globals.css'
import { Figtree } from 'next/font/google'

// ===== Components =========
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

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

        <ToasterProvider />

        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>
            {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
        {/* access to client supabase inside of our app */}

      </body>
    </html>
  )
}
