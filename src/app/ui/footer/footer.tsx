import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__newsletter}>
            <h2>Subscribe to <span>our newsletter</span></h2>
            <div className={styles.footer__newsletter__form}>
              Form
            </div>
          </div>
          <ul className={styles.footer__content}>
            <li className={styles.footer__content__address}>
              Uriarte 1572,<br/>C1414 Cdad.<br/>Autónoma de Buenos Aires<br/>Argentina
            </li>
            <li className={styles.footer__content__social}><a href='http://www.twitter.com'>Twitter / X</a>
                <br/><a href='http://www.instagram.com'>Instagram</a><br/><a href='http://www.linkedin.com'>Linkedin</a></li>
            <li className={styles.footer__content__business}>New business<br/><a href='mailto:business@gignko.co'>business@gignko.co</a></li>
            <li className={styles.footer__content__contact}>General enquires<br/><a href='mailto:hello@gignko.co'>hello@gignko.co</a></li>
          </ul>
        </div>
        <div className={styles.footer__copyright}>
          <small>© gingko creative studio</small>
        </div>
    </footer>
  )
}
