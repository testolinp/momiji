import { inter } from './ui/fonts'
import Footer from './ui/footer/footer'
import './ui/global.css'
import Header from './ui/header/header'

export default function RootLayout(
    { children }: { children: React.ReactNode }) {
  return (
    <html lang='es-AR'>
      <head>
        <title>Sharpti | Transformación digital a tu medida</title>
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
        <meta name='description' content='Generamos productos digitales a medida de cada cliente, siempre con foco en la experiencia de sus usuarios' />
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
