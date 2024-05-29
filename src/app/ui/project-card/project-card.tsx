import styles from './project-card.module.css'
import Image from 'next/image'

export default function ProjectCard({
  title,
  description,
  image
}) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <Image src={image} width={1600} height={0} priority={true}
           alt='' style={{ width: '100%', height: '100%' }} />
      </div>
      <p>{description}</p>
      <h3>{title}</h3>
    </article>
  )
}
