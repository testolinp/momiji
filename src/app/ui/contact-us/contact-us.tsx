import Link from 'next/link'
import styles from './contact-us.module.css'

export default function ContactUs() {
  return (
    <section className={styles.contact}>
      <span>Tenes una gran idea para conquistar el mundo?</span>
      <h2>Trabajemos juntos</h2>
      <div className={styles.contact__cta}>
        <Link href="mailto:contact@sharpti.com">
          Contacto
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
