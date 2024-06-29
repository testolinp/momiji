'use client'

import Link from 'next/link'
import styles from './contact-us.module.css'
import { motion } from 'framer-motion'

export default function ContactUs() {
  return (
    <section className={styles.contact}>
      <motion.span initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .6, duration: .5 }} viewport={{ once: true }}>
        Tenes una gran idea para conquistar el mundo?
      </motion.span>
      <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .8, duration: .5 }} viewport={{ once: true }}>
        Trabajemos juntos
      </motion.h2>
      <motion.div className={styles.contact__cta} initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .8, duration: .5 }} viewport={{ once: true }}>
        <Link href="mailto:contact@sharpti.com">
          Contacto
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
