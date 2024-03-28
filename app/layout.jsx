import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata = {
  title: 'ভূমি তথ্য বাতায়ন',
  description: 'ভূমি তথ্য বাতায়ন',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
