import styles from './services-card.module.css'

export default function ServicesCard() {
  return (
    <div className={styles.serviceCard}>
      <h3>Strategy</h3>
      <ul>
        <li>Experience Strategy</li>
        <li>Technology strategy</li>
        <li>Creative direction</li>
        <li>Discovery</li>
        <li>Research</li>
      </ul>
    </div>
  )
}
