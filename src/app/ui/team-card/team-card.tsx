import styles from './team-card.module.css'
import Image from 'next/image'

export default function TeamCard() {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamCard__image}>
      <Image src='/images/people.jpg' width={1600} height={0} priority={true}
          alt='' style={{ width: '100%', height: '100%' }} />
      </div>
      <h3>First, Second Name</h3>
      <p>Role</p>
    </article>
  )
}
