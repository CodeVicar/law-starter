import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Justice Law Firm',
  description: 'Expert legal services for all your needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
