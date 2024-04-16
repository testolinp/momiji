import styles from './team-card.module.css'

export default function TeamCard() {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamCard__image}>
        IMAGE
      </div>
      <h3>First, Second Name</h3>
      <p>Role</p>
    </article>
  )
}
