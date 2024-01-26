import Link from "next/link"
import styles from "./styles.module.css"
export default function Nav(){
  return <nav className={styles.nav}>
    <Link href="/" className={styles.link}>Home</Link>
    <Link href="/blog" className={styles.link}>Blog</Link>
    <Link href="/projects" className={styles.link}>Projects</Link>
    <Link href="/reading" className={styles.link}>Reading</Link>
    <Link href="/archives" className={styles.link}>Archives</Link>
  </nav>
}