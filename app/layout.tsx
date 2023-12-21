import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/context/ThemeProvider'

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
    <html lang="en">
        <body className={`${inter.variable} ${space_grotesk.variable} background-light-850-dark_dark100`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'bg-red-500 hover:bg-red-700',
              footerActionLink: 'text-red-500 hover:text-red-700'
            }
          }}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClerkProvider>
        </body>
      </html>
  )
}
