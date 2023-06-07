import React from 'react'
import styles from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faDochub, faGithub } from '@fortawesome/free-brands-svg-icons'
const About = () => {
  return (
    <section id='about'>
      <div className={styles.about_container}>
      <div className={styles.about_container_header}>
        <h1 className={styles.h1}>About me</h1>
        <span className={styles.span} >My introduction</span>
      </div>
      <div className={styles.content}>
      <div className={styles.imageBox}>
        <div className={styles.circle}></div>
        <div className={styles.blurBox}></div>
      </div>
      <div className={styles.info}>
          <p className={styles.info_p}>Hello, my name is Ahmet Koçyiğit, and I was born in Sivas in the year 2000. I completed my high school education in the Web Programming department at Gebze STFA Vocational and Technical Anatolian High School. I have been very interested in programming since my high school days. After graduating from high school, I was admitted to Selçuk University, where I am currently studying Computer Engineering. I am a third-year student in the Computer Engineering department at Selçuk University. At the moment, I am taking courses and working on simple projects to further improve my skills in web development. My goal is to develop myself in technologies like Next.js and Node.js and become a full-stack developer.</p>
          <a href='https://drive.google.com/file/d/1I-UzeGzrSm7OkpbEtyR8M9456w-8D7gu/view?usp=drive_link' target='_blank' className={styles.info_a}>
            Show CV
            <FontAwesomeIcon icon={faFileAlt} size='xl'/>
          </a>
      </div>
      </div>
      </div>
    </section>
  )
}

export default About