"use client";
import Link from "next/link"
import Hamburger from "@/components/Hamburger"
import styles from "./styles.module.css"
export default function Nav(){
  function unCheckHamburger(){
    const hamburger = document.getElementById('hamburger') as HTMLInputElement
    if (hamburger){
      hamburger.checked = false
    }
  }

  return <nav className={styles.nav}>
    <Link href="/" className={styles.link}>Home</Link>
    <Link href="/blog" className={styles.link}>Blog</Link>
    <Link href="/projects" className={styles.link}>Projects</Link>
    <Link href="/about" className={styles.link}>About</Link>
    <Link href="/reading" className={styles.overflow + " " + styles.link}>Reading</Link>
    <Link href="/archives" className={styles.overflow  + " " + styles.link}>Archives</Link>
    <Hamburger className={styles.catcher}>
      <Link href="/projects" onClick={ unCheckHamburger } className={styles.link}>Projects</Link>
      <Link href="/reading" onClick={ unCheckHamburger } className={styles.link}>Reading</Link>
      <Link href="/archives" onClick={ unCheckHamburger } className={styles.link}>Archives</Link>
    </Hamburger>
  </nav>
}