import './globals.css'

//Components
import Footer from '@/app/components/footer/Footer'

export const metadata = {
  title: 'Next ToDo',
  description: 'Created by Batalshikov Dima via exchange coffee to code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  )
}
