import React from 'react'
import styles from './portfolio.module.css'
import Image from 'next/image'
const Portfolio = () => {
  return (
   <section id='portfolio'>
    <div className={styles.portfolio_container}>
        <div className={styles.portfolio_header}>
            <h1 className={styles.portfolio_header_h1}>Portfolio</h1>
            <span>Recent works</span>
        </div>
        <div className={styles.portfolio_content}>
            <div className={styles.work_container}>
                <div className={styles.work_image}>
                    <Image layout="responsive" objectFit="cover" src='/images/2.png' alt='ahmetk' width={348} height={150} className={styles.work_image}/>
                    
                </div>
                <div className={styles.work_description}>
                    <br/>
                   <h3>User Authentication System</h3>
                    <br/>
                    <p>The project was developed with the aim of improving my skills and gaining more experience with technologies such as React, JWT and Zustand.</p>
                    <br/>
                    <h4>Tech Used: Next.js, MongoDB, JWT</h4>
                    <br/>
                    <br/>
                    <a className={styles.work_link} href='https://github.com/ahmetkfi/user_authentication_system' target='_blank'>
                        Source Code
                    </a>
                </div>
            </div>
            <div className={styles.work_container}>
                <div className={styles.work_image}>
                    <Image layout="responsive" objectFit="cover" src='/images/3.png' alt='ahmetk' width={348} height={150} className={styles.work_image}/>
                    
                </div>
                <div className={styles.work_description}>
                    <br/>
                   <h3>To-Do Jobs</h3>
                    <br/>
                    <p>The project was developed with the aim of improving my skills and gaining more experience with technologies such as Node.js,Express.js,MongoDB.</p>
                    <br/>
                    <h4>Tech Used: Node.js, Express.js,Ejs,MongoDB</h4>
                    <br/>
                    <br/>
                    <a className={styles.work_link} href='https://github.com/ahmetkfi/to-do-app' target='_blank'>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
        
    </div>
   </section>
  )
}

export default Portfolio