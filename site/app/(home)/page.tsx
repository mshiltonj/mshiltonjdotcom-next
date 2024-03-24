import styles from "./styles.module.css"
export default function Page(){
  return <div className={styles.home}>
    <div className={styles.inner}>
      <div className={styles.blurb}> Full&nbsp;Stack<br />Web Development </div>
      <div><img className={styles.logo} src="/images/angry-penguin.jpg" alt="mshiltonj.com" /></div>
      <div className={styles.name}> Steven Hilton </div>
      <div className={styles.login}>What do I do? Lots!</div>
      <ul className={styles.keywords}>
        <li>Ruby&nbsp;on&nbsp;Rails</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Linux</li>
        <li>AWS</li>
        <li>MySQL</li>
        <li>Git</li>
        <li>Ansible</li>
        <li>Docker</li>
        <li>Agile</li>
      </ul>
      <div><a className={styles.login} href="/about">Learn how I can help you</a></div>
    </div>
  </div>
}