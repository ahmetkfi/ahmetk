"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Skills from '@/components/skills/Skills'
import Portfolio from '@/components/portfolio/Portfolio'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Navbar from '@/components/navbar/Navbar'
import { useEffect } from 'react'
import { Router } from 'next/router'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
export default function HomePage() {
 
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
    </>
  )
}
