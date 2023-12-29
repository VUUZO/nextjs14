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
              card: 'background-light900_dark200 shadow-xl dark:shadow-none border-2 border-light-800 dark:border-dark-300',
              headerTitle: 'text-dark200_light900',
              headerSubtitle: 'dark:text-zinc-500',
              socialButtonsBlockButton: 'text-dark200_light900 border dark:bg-dark-300 dark:border-dark-300',
              dividerLine: 'dark:bg-dark-400',
              dividerText: 'dark:text-zinc-500',
              formFieldLabel: 'dark:text-zinc-400',
              formFieldInput: 'dark:bg-dark-300 dark:border dark:border-dark-400 dark:text-zinc-300',
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'text-primary-500 hover:text-primary-500',
              footerActionText: 'dark:text-zinc-500'
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
