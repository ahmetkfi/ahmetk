"use client"
import { Link } from 'react-scroll/modules'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const links=[
  {
    id:2,
    title:"About",
    to:'about'
  },
  {
    id:3,
    title:"Skills",
    to:'skills'
  },
  {
    id:4,
    title:"Portfolio",
    to:'portfolio'
  },
 
  

]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to='home' className={styles.logo} style={{cursor:'pointer'}} spy={true} smooth={true} offset={-150} duration={500}>ahmetk</Link>
      <div className={styles.links}>
      {links.map(link=>(
          <Link  key={link.id} to={link.to} className={styles.link} spy={true} smooth={true} offset={50} duration={500}>{link.title}</Link>
        ))}
       
      </div>
    </div>
  )
}

export default Navbar

/*       */