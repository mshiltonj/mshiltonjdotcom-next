import Link from "next/link"
import Hamburger from "@/components/Hamburger"
import styles from "./styles.module.css"
export default function Nav(){
  return <nav className={styles.nav}>
    <Link href="/" className={styles.link}>Home</Link>
    <Link href="/about" className={styles.link}>About</Link>
    <Link href="/blog" className={styles.link}>Blog</Link>
    <Link href="/projects" className={styles.link}>Projects</Link>
    <Link href="/reading" className={styles.overflow + " " + styles.link}>Reading</Link>
    <Link href="/archives" className={styles.overflow  + " " + styles.link}>Archives</Link>
    <Hamburger className={styles.catcher}>
      <Link href="/projects" className={styles.link}>Projects</Link>
      <Link href="/reading" className={styles.link}>Reading</Link>
      <Link href="/archives" className={styles.link}>Archives</Link>
    </Hamburger>
  </nav>
}