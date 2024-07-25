import { inter } from '../../ui/fonts'
import styles from './menu.module.css'

export default function Menu({ showMenu, hideMenu }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth'})
    hideMenu()
  }

  return (
    <div className={`${styles.menu} ${showMenu ? styles.menu__show : ''}`}>
      <div className={styles.menu__wrapper}>
        <nav className={styles.menu__nav}>
          <button className={inter.className} onClick={()=>scrollToSection('vision')}>Nuestra visión</button>
          <button className={inter.className} onClick={()=>scrollToSection('services')}>Servicios</button>
          <button className={inter.className} onClick={()=>scrollToSection('areas')}>Equipo</button>
          <button className={inter.className} onClick={()=>scrollToSection('projects')}>Projectos</button>
          <button className={inter.className} onClick={()=>scrollToSection('contact')}>Contacto</button>
        </nav>
      </div>
    </div>
  )
}
