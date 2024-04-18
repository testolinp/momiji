import { inter } from './ui/fonts'
import Footer from './ui/footer/footer'
import './ui/global.css'
import Header from './ui/header/header'
import { getJson } from './utils/utils'

export default function RootLayout(
    { children }: { children: React.ReactNode }) {
  const data = getJson('global.json')
  const {footer} = data

  return (
    <html lang="en">
      <head>
        <title>Momiji agency</title>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
