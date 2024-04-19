import ServicesCard from '../services-card/services-card'
import styles from './services.module.css'

export default function Services() {
  return (
    <section className={`container ${styles.services}`}>
      <h2><span>Our services &</span> Area of expertise</h2>
      <ul className={styles.list}>
        <li>
          <ServicesCard></ServicesCard>
        </li>
        <li>
          <ServicesCard></ServicesCard>
        </li>
        <li>
          <ServicesCard></ServicesCard>
        </li>
        <li>
          <ServicesCard></ServicesCard>
        </li>
      </ul>
    </section>
  )
}
