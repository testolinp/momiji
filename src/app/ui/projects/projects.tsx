import ProjectCard from '../project-card/project-card'
import styles from './projects.module.css'

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.projects__header}>
          <h2>Projects</h2>
          <p>Lusion is a digital production studio that brings your ideas to life through visually captivating designs and interactive experiences.</p>
        </div>
        <ul className={styles.projects__list}>
          <li>
            <ProjectCard
              title="Caliber"
              description="Empresa que ofrece ofrece servicios completos de reparación automotriz, incluyendo reparación de colisiones, reparación de vidrios de autos y cuidado general del automóvil."
              image="/images/project.jpg"
            ></ProjectCard>
          </li>
          <li>
            <ProjectCard
              title="Project Title"
              description="Project Description"
              image="/images/project.jpg"
            ></ProjectCard>
          </li>
          <li>
            <ProjectCard
              title="Project Title"
              description="Project Description"
              image="/images/project.jpg"
            ></ProjectCard>
          </li>
          <li>
            <ProjectCard
              title="Project Title"
              description="Project Description"
              image="/images/project.jpg"
            ></ProjectCard>
          </li>
        </ul>
      </div>
    </section>
  )
}
