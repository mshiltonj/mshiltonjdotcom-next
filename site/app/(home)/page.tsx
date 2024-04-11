import Image from "next/image"
import styles from "./styles.module.css"
export default function Page(){
  return <div className={styles.home}>
    <div className={styles.background}>
      <div className={styles.bgInner}>

        <div className={styles.flarea}></div>
        <div className={styles.flareb}></div>
        <div className={styles.flarec}></div>

        <div className={styles.flare2}></div>
        <div className={styles.flare1}></div>
        <div className={styles.flare3}></div>
        <div className={styles.flare4}></div>
        <div className={styles.flare5}></div>

        <Image src="/images/cloud.svg" alt="cloud" className={styles.cloud1} width="200" />
        <Image src="/images/cloud.svg" alt="cloud" className={styles.cloud2} width="200" />
        <Image src="/images/cloud.svg" alt="cloud" className={styles.cloud3} width="200" />

      </div>
    </div>
    <div className={styles.inner}>
      <div className={styles.blurb}> Full&nbsp;Stack<br />Web Development</div>

      <div className={styles.promo}>
      <Image className={styles.logo} src="/images/angry-penguin.jpg" alt="mshiltonj.com" />
      <div className={styles.qualities}>
      <span>Flexible</span>
      <span>Versatile</span>
      <span>Reliable</span>
      </div> 

      </div>

      <div className={styles.name}> Steven Hilton </div>
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
      <div><a className={styles.login} href="/about">How can I help you?</a></div>
    </div>
  </div>
}