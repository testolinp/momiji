'use client'

import styles from './header.module.css'
import Link from 'next/link'
import Menu from '../menu/menu'
import { useState } from 'react'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const displayMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    displayMenu()
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href='/' aria-label={'SharpTI'} className={`${styles.header__lg} ${showMenu ? styles.header__lg__reverse : ''}`}>SharpTI</Link>
        <div className={styles.header__buttons}>
          <button className={styles.header__talk} aria-label='Contacto'>
            Contacto
            <svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
              <path d='M16.175 13.7131H4V11.7131H16.175L10.575 6.11307L12 4.71307L20 12.7131L12 20.7131L10.575 19.3131L16.175 13.7131Z' fill='white' />
            </svg>
          </button>
          <button className={`${styles.header__menu} ${showMenu ? styles.header__menu__close : ''}`} aria-label='Show menu'
              onClick={displayMenu}>
            <small>Menu</small>
            <span></span>
          </button>
        </div>
      </div>
      <Menu showMenu={showMenu} hideMenu={hideMenu}></Menu>
    </header>
  )
}
