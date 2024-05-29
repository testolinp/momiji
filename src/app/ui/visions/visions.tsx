import Link from 'next/link'
import styles from './visions.module.css'

export default function Visions() {
  return (
    <section className={`container ${styles.visions}`}>
      <h2><span>Transformación</span> Digital a tu Medida</h2>
      <div className={styles.visions__content}>
        <p>
          En nuestra empresa, creamos desarrollos web a medida e implementamos CRMs innovadores. Utilizamos tecnología avanzada para ser tu socio estratégico, ayudándote a alcanzar tus objetivos de negocio a través de la transformación digital. Impulsa tu crecimiento con soluciones personalizadas y eficientes.
        </p>
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
