import Link from "next/link"
import Config from "@/app.config"
import styles from "./styles.module.css"

export default function Paginator({currentPage, totalEntries}: {currentPage: number, totalEntries: number}){

  const end = Math.ceil(totalEntries / Config.PER_PAGE) - 1
  const hasStart : boolean = currentPage > 0
  const hasPrevious : boolean = currentPage > 0
  const hasNext : boolean = currentPage < end
  const hasEnd : boolean = currentPage < end

  return <div className={styles.paginator}>
    { hasStart ? <Link className={styles.a} href="/blog">&lt;&lt; Start</Link> : <span className={styles.a + " " +  styles.a_disabled}>Start</span> }
    { hasPrevious ? <Link className={styles.a} href={ "/blog/page/" + (currentPage - 1).toString() }>&lt; Previous</Link> : <span className={styles.a + " " +  styles.a_disabled}>Previous</span>}
    { hasNext ? <Link className={styles.a} href={ "/blog/page/" + (currentPage + 1).toString() }>Next &gt;</Link> : <span className={styles.a + " " +  styles.a_disabled}>Next</span> }
    { hasEnd ? <Link className={styles.a} href={"/blog/page/" + end.toString() }>End &gt;&gt;</Link> : <span className={styles.a + " " +  styles.a_disabled}>End </span> }
  </div>
}