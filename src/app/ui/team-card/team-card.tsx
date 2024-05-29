import styles from './team-card.module.css'
import Image from 'next/image'

export default function TeamCard({role, name, image = '/images/people.jpg'}) {
  return (
    <article className={styles.teamCard}>
      <div className={styles.teamCard__image}>
      <Image src={image} width={1600} height={0} priority={true}
          alt='' style={{ width: '100%', height: '100%' }} />
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </article>
  )
}
