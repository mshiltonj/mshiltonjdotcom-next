import styles from "./styles.module.css"
export default function Panel({ title, children }: { title?: string, children: React.ReactNode }){
    return <div className={styles.root}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.inner}>
            { children }
        </div>
    </div>
}