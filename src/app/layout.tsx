import { inter } from './ui/fonts'
import Footer from './ui/footer/footer'
import './ui/global.css'
import Header from './ui/header/header'
import StickyCursor from './ui/sticky-cursor/sticky-cursor'

export default function RootLayout(
    { children }: { children: React.ReactNode }) {
  return (
    <html lang='es-AR'>
      <head>
        <title>Sharpti | Transformación digital a tu medida</title>
        <link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
        <meta name='description' content='Somos una agencia especializada en crear soluciones personalizadas que aceleran el crecimiento de nuestros clientes.' />
        <meta property='og:title' content='Sharpti | Transformación digital a tu medida' />
        <meta property='og:description' content='Somos una agencia especializada en crear soluciones personalizadas que aceleran el crecimiento de nuestros clientes.' />
        <meta property='og:url' content='https://www.sharpti.com/' />
        <meta property='og:image' content='https://www.sharpti.com/images/herospace-mobile.jpg' />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header></Header>
        <main>
          <StickyCursor />
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
