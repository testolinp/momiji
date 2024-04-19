import Link from 'next/link'
import styles from './visions.module.css'

export default function Visions() {
  return (
    <section className={`container ${styles.visions}`}>
      <h2><span>Beyond visions</span> Within reach</h2>
      <div className={styles.visions__content}>
        <p>Lusion is a digital production studio that brings your ideas to life through visually captivating designs and interactive experiences. With our talented team, we push the boundaries by solving complex problems, delivering tailored solutions that exceed expectations and engage audiences.</p>
        <Link href='/' className={styles.visions__talk} aria-label="Let's talk">
            let’s talk
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M16.175 13.7131H4V11.7131H16.175L10.575 6.11307L12 4.71307L20 12.7131L12 20.7131L10.575 19.3131L16.175 13.7131Z" fill="white"/>
            </svg>
        </Link>
      </div>
    </section>
  )
}
