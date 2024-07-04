'use client'

import TeamCard from '../team-card/team-card'
import styles from './team.module.css'
import { motion } from 'framer-motion'

export default function Team() {
  const members = [
    {
      role: 'Innovación y desarrollo',
      name: 'Brian de Diego',
      image: '/images/team/brian-dediego.jpeg'
    },
    {
      role: 'Diseño de marca',
      name: 'Paola Braile',
      image: '/images/team/paola-braile.jpeg'
    },
    {
      role: 'Dirección de proyectos',
      name: 'Patricio Testolin',
      image: '/images/team/patricio-testolin.jpeg'
    },
    {
      role: 'Estrategia de negocios',
      name: 'Delfina Galan',
      image: '/images/team/delfina-galan.jpeg'
    }
  ]

  return (
    <section className={`container ${styles.team}`} id='team'>
      <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .6, duration: .5 }} viewport={{ once: true }}>
        Nuestras áreas
      </motion.h2>
      <ul className={styles.team__list}>
        {members.map((member, key) => {
          let delayTime = (60 + (6 * key)) / 100;

          return (
            <motion.li key={key} initial={{ opacity: 0, top: 20 }}
                whileInView={{ opacity: 1, top: 0 }} transition={{ delay: delayTime, duration: .5 }} viewport={{ once: true }}>
              <TeamCard role={member.role} name={member.name} image={member.image}></TeamCard>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
