import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa42Group, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
      <div className={styles.container}>
      <div>©2023 ahmetk. All rights reserved.</div>
      <div>
        <div className={styles.social}>
        <Link href='https://github.com/ahmetkfi' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='xl'/>
        </Link>
        <Link href='https://www.linkedin.com/in/muhammet-ahmet-ko%C3%A7yi%C4%9Fit-5b9028161/' target='_blank' >
          <FontAwesomeIcon icon={faLinkedinIn}  size='xl'/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer