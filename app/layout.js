import { Inter } from 'next/font/google';
import './globals.css';

import Navigation from './components/navigation.jsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce',
  description: 'Learning NextJS building an app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
