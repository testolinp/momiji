import ServicesCard from '../services-card/services-card'
import styles from './services.module.css'

export default function Services() {
  return (
    <section className={`container ${styles.services}`}>
      <h2><span>Servicios &</span> experiencia</h2>
      <ul className={styles.list}>
        <li>
          <ServicesCard
            title="Desarrollo de ecommerce"
            items={["Sincronizado con mercadolibre.", "Optimización y Marketing Digital", "Manejo de envios.", "Pasarela de pagos.", "Soporte y Mantenimiento Continuo"]}
          ></ServicesCard>
        </li>
        <li>
          <ServicesCard
            title="Desarrollo web a medida"
            items={["Consultoría y Estrategia", "Desarrollo y Programación", "Optimización y Rendimiento", "Mantenimiento y Soporte Continuo"]}
          ></ServicesCard>
        </li>
        <li>
          <ServicesCard
            title="Soluciones ERP"
            items={["Consultoría y Análisis de Requerimientos", "Diseño y Personalización", "Desarrollo y Implementación", "Capacitación y Soporte", "Optimización y Mejora Continua"]}
          ></ServicesCard>
        </li>
      </ul>
    </section>
  )
}
