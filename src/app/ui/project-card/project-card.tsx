import styles from './project-card.module.css'
import Image from 'next/image'

export default function ProjectCard() {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <Image src='/images/project.jpg' width={1600} height={0} priority={true}
           alt='' style={{ width: '100%', height: '100%' }} />
      </div>
      <p>web • design • development • 3d</p>
      <h3>Project Title</h3>
    </article>
  )
}
