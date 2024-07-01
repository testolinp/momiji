import { inter } from '../../ui/fonts'
import styles from './menu.module.css'

export default function Menu({showMenu}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <div className={`${styles.menu} ${showMenu ? styles.menu__show : ''}`}>
      <div className={styles.menu__wrapper}>
        <nav className={styles.menu__nav}>
          <button onClick={()=>scrollToSection('vision')}>Nuestra visión</button>
          <button onClick={()=>scrollToSection('services')}>Servicios</button>
          <button onClick={()=>scrollToSection('team')}>Equipo</button>
          <button onClick={()=>scrollToSection('projects')}>Projectos</button>
          <button onClick={()=>scrollToSection('contact')}>Contacto</button>
        </nav>
        {/* <div className={styles.menu__newsletter}>
          <h2>Subscribe to our newsletter</h2>
          <div className={styles.menu__newsletter__input}>
            <input placeholder='Your email' />
            <button>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='black'/>
            </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
