import TeamCard from '../team-card/team-card'
import styles from './team.module.css'

export default function Team() {
  return (
    <section className={styles.team}>
      <h2>Meet the team</h2>
      <ul className={styles.team__list}>
        <li>
          <TeamCard></TeamCard>
        </li>
        <li>
          <TeamCard></TeamCard>
        </li>
        <li>
          <TeamCard></TeamCard>
        </li>
        <li>
          <TeamCard></TeamCard>
        </li>
      </ul>
    </section>
  )
}
