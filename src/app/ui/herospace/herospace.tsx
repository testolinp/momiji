'use client'

import styles from './herospace.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Herospace() {
  
  return (
    <section className={`container ${styles.herospace}`}>
      <div className={styles.herospace__content}>
        <motion.h1 className={styles.herospace__title} initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .3, duration: .5 }} viewport={{ once: true }}>
          Desarrollamos la tecnología para que impulses tu negocio
        </motion.h1>
      </div>
      <div className={styles.herospace__image}>
          <motion.div className={styles.herospace__image__content} initial={{ scale: .9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: .8, duration: .5 }} viewport={{ once: true }}>
            <Image src='/images/herospace.jpg' width={1600} height={0} priority={true}
                alt='' style={{ width: '100%', height: '100%' }} className={styles.desktop} />
            <Image src='/images/herospace-mobile.jpg' width={1600} height={0} priority={true}
                alt='' style={{ width: '100%', height: '100%' }} className={styles.mobile} />
          </motion.div>
      </div>
    </section>
  )
}
