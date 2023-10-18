import Image from 'next/image';
import styles from './page.module.css';

import GetStarted from './components/getstarted.jsx';

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Shoes shop</h1>
      <h3>Welcome runner. Here you &apos; d find your ideal runnig shoes to reach your goals.</h3>
      <GetStarted />
    </div>
  )
}
