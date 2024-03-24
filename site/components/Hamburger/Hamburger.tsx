import styles from "./styles.module.css"

export default function Hamburger({children, className} : { children?: React.ReactNode, className?: string}){
  className = className ? className : ""
  return <div className={ className + " " + styles.ham}>
      <label htmlFor="hamburger" className={styles.hamburger}>
        <input type="checkbox" id="hamburger" />
      </label>
      <aside className={styles.dropMenu}>{children}</aside>
    </div>
}