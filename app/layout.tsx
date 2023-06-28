import './globals.css'
import { Figtree } from 'next/font/google'

// ===== Components =========
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'

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

        <SupabaseProvider>
          <Sidebar>
          {children}
          </Sidebar>
        </SupabaseProvider>
        {/* access to client supabase inside of our app */}
        
      </body>
    </html>
  )
}
