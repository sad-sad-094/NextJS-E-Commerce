import Link from 'next/link';

import styles from './components.module.css';

export default function GetStarted () {

  return (
    <Link href={'/products'}>
      <button className={styles.starter}>
        Find my new shoes
      </button>
    </Link>
  )
}

