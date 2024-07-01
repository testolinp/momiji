'use client'

import ProjectCard from '../project-card/project-card'
import styles from './projects.module.css'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Gut Agency',
      description: 'Desarrollamos su sitio en tres idiomas para resaltar su crecimiento en diversas regiones.',
      image: '/images/project-gut.jpg'
    },
    {
      title: 'Dift.co',
      description: 'Project Description',
      image: '/images/project-dift.jpg'
    },
    {
      title: 'Filo.news',
      description: 'Project Description',
      image: '/images/project-filo.jpg'
    },
    {
      title: 'Caliber',
      description: 'Empresa que ofrece ofrece servicios completos de reparación automotriz, incluyendo reparación de colisiones, reparación de vidrios de autos y cuidado general del automóvil.',
      image: '/images/project-caliber.jpg'
    },
  ]

  return (
    <section className={styles.projects} id='projects'>
      <div className='container'>
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
                  description={project.description}
                  image={project.image}
                ></ProjectCard>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
