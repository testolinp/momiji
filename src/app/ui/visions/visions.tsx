'use client'

import Link from 'next/link'
import styles from './visions.module.css'
import { motion } from 'framer-motion'

export default function Visions() {
  return (
    <section className={`container ${styles.visions}`} id='vision'>
      <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .6, duration: .5 }} viewport={{ once: true }}>
        <span>Transformación</span> Digital a tu Medida
      </motion.h2>
      <div className={styles.visions__content}>
        <motion.p initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .7, duration: .5 }} viewport={{ once: true }}>
          Somos una agencia especializada en crear soluciones personalizadas que impulsan el impulso de nuestros clientes.
        </motion.p>
        <motion.div initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .5, duration: .5 }} viewport={{ once: true }}>
          <Link href='/' className={styles.visions__talk} aria-label='Contacto'>
              Contacto
              <svg width='24' height='25' viewBox='0 0 24 25' fill='none'>
                <path d='M16.175 13.7131H4V11.7131H16.175L10.575 6.11307L12 4.71307L20 12.7131L12 20.7131L10.575 19.3131L16.175 13.7131Z' fill='white'/>
              </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
