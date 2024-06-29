'use client'

import ServicesCard from '../services-card/services-card'
import styles from './services.module.css'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Desarrollo de ecommerce',
    items: ["Sincronizado con mercadolibre.", "Optimización y Marketing Digital", "Manejo de envios.", "Pasarela de pagos.", "Soporte y Mantenimiento Continuo"]
  },
  {
    title: 'Desarrollo web a medida',
    items: ["Consultoría y Estrategia", "Desarrollo y Programación", "Optimización y Rendimiento", "Mantenimiento y Soporte Continuo"]
  },
  {
    title: 'Soluciones ERP',
    items: ["Consultoría y Análisis de Requerimientos", "Diseño y Personalización", "Desarrollo y Implementación", "Capacitación y Soporte", "Optimización y Mejora Continua"]
  }
]

export default function Services() {
  return (
    <section className={`container ${styles.services}`}>
      <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .6, duration: .5 }} viewport={{ once: true }}>
        <span>Servicios &</span> experiencia
      </motion.h2>
      <ul className={styles.list}>
        {services.map((service, key) => {
          let delayTime = (60 + (2 * key)) / 100;

          return (
            <motion.li key={key} initial={{ opacity: 0, top: 20 }}
                whileInView={{ opacity: 1, top: 0 }} transition={{ delay: delayTime, duration: .5 }} viewport={{ once: true }}>
              <ServicesCard
                title={service.title}
                items={service.items}
              ></ServicesCard>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
