import Link from "next/link";

import styles from './components.module.css';

const links = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "Products",
    path: "/products"
  },
  {
    label: "Cart",
    path: "/cart"
  }
]

export default function Navigation() {

  return (
    <div className={styles.navbar}>
      <div>
        <h1>Shoes Shop</h1>
      </div>
      <div>
        <ul className={styles.buttons}>
          {links.map(({ label, path }) => (
            <li key={label} className={styles.button}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
