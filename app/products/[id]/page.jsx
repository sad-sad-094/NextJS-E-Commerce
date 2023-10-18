import Image from 'next/image';

import styles from '../../components/components.module.css';

export default function Shoes(shoe, img, name) {
  // const { id, shoes } = params

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cardBody}>
            <div className="card-body__img">
              <Image alt={name} src={img} width={380} height={150} />
            </div>
            <div className="card-body__name">
              <h1>{name}</h1>
            </div>
            <div className="card-body__description">
              <article>
                Description
              </article>
            </div>
          </div>
    </div>
  )
}