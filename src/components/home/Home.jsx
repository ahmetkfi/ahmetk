
import React from 'react'
import styles from './home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Home = () => {

  return (
   <section className={styles.home_section} id="home">
    <div className={styles.home__container}>
      <div className="home__content grid">
        <h3 className={styles.home_subtitle}>Hi,I&apos;m Ahmet Koçyiğit</h3>
        <p className={styles.home_description}>
        I&apos;m a Software Engineer, developing web applications.You can reach me through the following links.
        </p>
        <div className={styles.contactLinksDiv}>
          <Link href='https://github.com/ahmetkfi' target='_blank' className={styles.contactLinks}>
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </Link>
          <Link href='https://github.com/ahmetkfi' target='_blank' className={styles.contactLinks}>
          <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
          </Link>
      </div>
      </div>
      
    </div>
   </section>
  )
}

export default Home