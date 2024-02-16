import styles from "./styles.module.css"
export default function PageByOne({current, previous, next, last} : {last?:string, current: string, previous?: string, next?: string}) {
  return <div className={styles.page_by_one}>
    <div>{previous && <a className={styles.a} href={previous}>Previous</a>}</div>
    <div>{current}</div>
    <div>{next && <a className={styles.a} href={next}>Next</a>}</div>
    <div>{last && <a className={styles.a} href={last}>Last</a>}</div>
  </div>
}
