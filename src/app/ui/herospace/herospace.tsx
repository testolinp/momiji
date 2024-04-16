import styles from './herospace.module.css'
import {inter} from '../fonts'
import Image from 'next/image'
import {Herospace} from '../../page'

export default function Herospace() {
  return (
    <section className={styles.herospace}>
      <div className={styles.herospace__content}>
        <h1 className={`${styles.herospace__title} ${inter.className}`}
            dangerouslySetInnerHTML={{ __html: 'We build epic real time interactive experiences to blow people’s minds' }}></h1>
      </div>
      <div className={styles.herospace__image}>
        <div className={styles.herospace__image__content}></div>
        {/* <Image src={'image'} width={1600} height={0} priority={true}
            alt='' style={{ width: '100%', height: '100%' }} /> */}
      </div>
    </section>
  )
}
