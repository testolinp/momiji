import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
        <div className={styles.footer__wrapper}>
          {/* <div className={styles.footer__newsletter}>
            <h2>Suscribirse a<span> nuestro newsletter</span></h2>
            <div className={styles.footer__newsletter__form}>
              <input placeholder='Tu email' />
              <button aria-label='Enviar email'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div> */}
          <ul className={styles.footer__content}>
            <li className={styles.footer__content__address}>
              Autónoma de Buenos Aires<br/>Argentina
            </li>
            <li className={styles.footer__content__social}>Twitter / X
                <br/>Instagram<br/>Linkedin
            </li>
            <li className={styles.footer__content__business}>
              Nuevas empresas<br/>business@sharpti.com
            </li>
            <li className={styles.footer__content__contact}>
              Preguntas generales<br/>hello@sharpti.com
            </li>
          </ul>
        </div>
        <div className={styles.footer__copyright}>
          <small>© sharpti 2024</small>
        </div>
    </footer>
  )
}
