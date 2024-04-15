import Link from 'next/link'
import styles from './footer.module.css'
import { inter } from '../fonts'

export default function Footer({data}) {
  const {mainLink, socials} = data

  return (
    <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
          <Link href={mainLink.href} className={`${styles.footer__link} ${inter.className}`}>
            {mainLink.title}
          </Link>
          <ul className={styles.footer__social}>
            {socials.map((social, index) => {
              const {icon, href, ariaLabel} = social

              return (
                <li className={styles.footer__social__link} key={index}>
                  <a href={href} target='_blank' aria-label={ariaLabel} className={icon}></a>
                </li>
              )
            })}
          </ul>
        </div>
    </footer>
  )
}
