import styles from './services-card.module.css'

export default function ServicesCard({
  title,
  items
}) {
  return (
    <div className={styles.serviceCard}>
      <h3>{title}</h3>
      <ul>
        {
          items.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
