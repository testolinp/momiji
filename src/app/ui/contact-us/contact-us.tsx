import Link from 'next/link'
import styles from './contact-us.module.css'

export default function ContactUs() {

  return (
    <section className={styles.contact}>
      <span>IS your big idea ready to go wild?</span>
      <h2>Let’s work together</h2>
      <div className={styles.contact__cta}>
        <Link href="mailto:contact@momiji.com">
          contact us
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
