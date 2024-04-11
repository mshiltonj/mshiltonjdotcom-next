import styles from './styles.module.css'
import Image from 'next/image'

export default function Header(){
    return <header className={styles.root}>
        <Image className={styles.logo} src="/images/angry-penguin.jpg" alt="mshiltonj.com" />
        <h1 className={styles.header}>mshiltonj.com</h1>
    </header>
}