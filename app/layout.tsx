import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-inter'
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A community-driven platform for asking and answering programming questions.',
  icons: {
    icon: '/assets/images/site-logo-svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-red-500 hover:bg-red-700',
          footerActionLink: 'text-red-500 hover:text-red-700'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${space_grotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
