import styles from './project-card.module.css'

export default function ProjectCard() {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        IMAGE
      </div>
      <p>web • design • development • 3d</p>
      <h3>Project Title</h3>
    </article>
  )
}
