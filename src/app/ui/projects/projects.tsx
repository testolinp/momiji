import ProjectCard from '../project-card/project-card'
import styles from './projects.module.css'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projects__header}>
        <h2>Projects</h2>
        <p>Lusion is a digital production studio that brings your ideas to life through visually captivating designs and interactive experiences.</p>
      </div>
      <ul className={styles.projects__list}>
        <li>
          <ProjectCard></ProjectCard>
        </li>
        <li>
          <ProjectCard></ProjectCard>
        </li>
        <li>
          <ProjectCard></ProjectCard>
        </li>
        <li>
          <ProjectCard></ProjectCard>
        </li>
      </ul>
    </section>
  )
}
