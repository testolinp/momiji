import styles from './herospace.module.css'
import Image from 'next/image'

export default function Herospace() {
  return (
    <section className={`container ${styles.herospace}`}>
      <div className={styles.herospace__content}>
        <h1 className={styles.herospace__title}>
          Generamos productos digitales a medida de cada cliente, siempre con foco en la experiencia de sus usuarios
        </h1>
      </div>
      <div className={styles.herospace__image}>
        <div className={styles.herospace__image__content}>
          <Image src='/images/main.jpg' width={1600} height={0} priority={true}
              alt='' style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
