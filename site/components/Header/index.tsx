import styles from './styles.module.css'
export default function Header(){
    return <header className={styles.root}>
        <img className={styles.logo} src="/images/angry-penguin.jpg" alt="mshiltonj.com" />
        <h1 className={styles.header}>mshiltonj.com</h1>
    </header>
}