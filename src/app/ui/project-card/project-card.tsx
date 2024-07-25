import styles from './project-card.module.css'
import Image from 'next/image'

export default function ProjectCard({ title, subtitle, image }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <Image src={image} width={1600} height={0} priority={true}
           alt='' style={{ width: '100%', height: '100%' }} />
      </div>
      <h3>{title} <span>/ {subtitle}</span></h3>
    </article>
  )
}
