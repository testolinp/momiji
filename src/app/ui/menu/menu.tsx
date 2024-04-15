import { inter } from '../fonts'
import Link from "next/link"
import styles from './menu.module.css'

export default function Menu({showMenu, displayMenu, socials, menu, ariaClose}) {

  const renderLink = (link) => {
    let button;
    const {title, href, target} = link

    if (target) {
      button = <a href={href} target="_blank" className={inter.className}>{title}</a>
    } else {
      button = <Link href={href} className={inter.className} onClick={displayMenu}>{title}</Link>
    }

    return button
  }

  return (
    <div className={`${styles.menu} ${showMenu ? styles.menu__show : ''}`}>
      <div className={styles.menu__header}>
        <div className={`${styles.menu__header__lg} icon-lg`}></div>
        <button className={`${styles.menu__header__close} icon-close`} 
            onClick={displayMenu} aria-label={ariaClose}></button>
      </div>
      <nav className={styles.menu__nav}>
        {menu.map((item, index) => {
          const {title, links} = item
          return (
            <div className={styles.menu__nav__content} key={index}>
              <span className={inter.className}>{title}</span>
              {links.map((link, index) => {
                return (
                  <div key={index}>{renderLink(link)}</div>
                )
              })}
            </div>
          )
        })}
      </nav>
      <nav className={styles.menu__social}>
        {socials.map((social, index) => {
          const {icon, path, ariaLabel} = social
          return (
            <a href={path} target="_blank" className={icon} aria-label={ariaLabel} key={index}></a>
          )
        })}
      </nav>
    </div>
  )
}
