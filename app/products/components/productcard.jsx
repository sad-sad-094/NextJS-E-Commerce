import Link from 'next/link';
import Image from 'next/image';

import styles from './components.module.css';

const fetchShoes = () => {
  return fetch('http://ec2-18-218-69-235.us-east-2.compute.amazonaws.com:3000/shoes')
    .then(resp => resp.json())
}

export default async function ProductCard() {
  const shoes = await fetchShoes()

  return (
    <div className={styles.pageContainer}>
      {shoes.map(shoe => (
        <Link href={`/products/${shoe._id}`} key={shoe._id}>
          <div className={styles.cardBody}>
            <div className="card-body__img">
              <Image alt={shoe.name} src={shoe.img} width={380} height={150} />
            </div>
            <div className="card-body__name">
              <h1>{shoe.name}</h1>
            </div>
            <div className="card-body__description">
              <article>
                Description
              </article>
            </div>
          </div>
        </Link>
      ))}

    </div>
  )
}
