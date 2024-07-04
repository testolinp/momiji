'use client'

import ServicesCard from '../services-card/services-card'
import styles from './services.module.css'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Desarrollo web a medida',
    description: 'Desde un diseño moderno y funcional hasta una experiencia de usuario excepcional, nuestro equipo experto en desarrollo web garantiza resultados sobresalientes',
    items: ['Impulsa tu presencia digital con un sitio web personalizado que refleje la identidad única de tu marca',
      'Consigue un sitio web responsive y optimizado para obtener mayor visibilidad en los motores de búsqueda']
  },
  {
    title: 'Desarrollo de ecommerce',
    description: 'Desde el diseño visualmente atractivo hasta la integración segura del catálogo y pasarelas de pago, te proporcionamos todo lo necesario para impulsar tus ventas en línea',
    items: ['Convierte visitantes en clientes fieles con una tienda online intuitiva y fácil de usar', 
      'Aumenta tus ventas con funcionalidades avanzadas como carrito abandonado, promociones exclusivas y recomendaciones personalizadas']
  },
  {
    title: 'Soluciones ERP',
    description: 'Ya sea que necesites mejorar el control financiero, el inventario o los procesos logísticos, nuestro sistema ERP te brinda las herramientas para simplificar tus operaciones comerciales',
    items: ['Automatiza tareas manuales y agiliza tus procesos empresariales clave mediante nuestra plataforma ERP personalizada', 
      'Toma decisiones más informadas gracias al acceso instantáneo a datos precisos sobre todas las áreas funcionales de tu negocio']
  }
]

export default function Services() {
  return (
    <section className={`container ${styles.services}`} id='services'>
      <motion.h2 initial={{ opacity: 0, top: 20 }}
            whileInView={{ opacity: 1, top: 0 }} transition={{ delay: .6, duration: .5 }} viewport={{ once: true }}>
        <span>Servicios &</span> experiencia
      </motion.h2>
      <ul className={styles.list}>
        {services.map((service, key) => {
          const {title, description, items} = service;
          let delayTime = (60 + (2 * key)) / 100;

          return (
            <motion.li key={key} initial={{ opacity: 0, top: 20 }}
                whileInView={{ opacity: 1, top: 0 }} transition={{ delay: delayTime, duration: .5 }} viewport={{ once: true }}>
              <ServicesCard
                title={title}
                description={description}
                items={items}
              ></ServicesCard>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
