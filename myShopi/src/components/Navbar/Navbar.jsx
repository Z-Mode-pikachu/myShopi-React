import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myShopi</li>

        <li><Link className={styles.links} to='/login'>Login</Link></li>
        <li><Link className={styles.links} to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  )
}
