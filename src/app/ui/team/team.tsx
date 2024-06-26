import TeamCard from '../team-card/team-card'
import styles from './team.module.css'

export default function Team() {
  return (
    <section className={`container ${styles.team}`}>
      <h2>Conocé al equipo</h2>
      <ul className={styles.team__list}>
        <li>
          <TeamCard role='Advisor' name='Delfina Galan' image='/images/team/brian-dediego.jpeg'></TeamCard>
        </li>
        <li>
          <TeamCard role='CTO' name='Brian de Diego' image='/images/team/brian-dediego.jpeg'></TeamCard>
        </li>
        <li>
          <TeamCard role='CPO' name='Patricio Testolin' image='/images/team/patricio-testolin.jpeg'></TeamCard>
        </li>
        <li>
          <TeamCard role='UX/UI Designer' name='Valeria Gambarg'></TeamCard>
        </li>
        {/* <li>
          <TeamCard role='Sr Mobile Developer' name='Christian de Diego'></TeamCard>
        </li> */}
        {/* <li>
          <TeamCard role='UX Designer' name='Tomas Rioboo'></TeamCard>
        </li> */}
        <li>
          <TeamCard role='Brand Designer' name='Paola Braile' image='/images/team/paola-braile.jpeg'></TeamCard>
        </li>
        {/* <li>
          <TeamCard role='Sr Qa' name='Manuela Miale'></TeamCard>
        </li> */}
        {/* <li>
          <TeamCard role='Sr Backend Developer' name='Alberto esparragoza'></TeamCard>
        </li> */}
      </ul>
    </section>
  )
}
