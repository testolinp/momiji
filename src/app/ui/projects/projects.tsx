'use client'

import ProjectCard from '../project-card/project-card'
import styles from './projects.module.css'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Gut Agency',
      subtitle: 'Agencia de publicidad',
      image: '/images/project-gut.jpg'
    },
    {
      title: 'Dift.co',
      subtitle: 'Agencia digital',
      image: '/images/project-dift.jpg'
    },
    {
      title: 'Filo.news',
      subtitle: 'Portal de noticias',
      image: '/images/project-filo.jpg'
    },
    {
      title: 'Caliber',
      subtitle: 'E-commerce',
      image: '/images/project-caliber.jpg'
    },
  ]

  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.projects__header}>
        <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .8, duration: .5 }} viewport={{ once: true }}>
          Proyectos
        </motion.h2>
      </div>
      <ul className={styles.projects__list}>
        {projects.map((project, key) => {
          let delayTime = (60 + (6 * key)) / 100;

          return (
            <motion.li key={key} initial={{ opacity: 0, top: 20 }}
                whileInView={{ opacity: 1, top: 0 }} transition={{ delay: delayTime, duration: .5 }} viewport={{ once: true }}>
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
              ></ProjectCard>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
