import Link from './Routes/Link'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href='/one'>One</Link>
      <Link href='/two'>Two</Link>
      <Link href='/three'>Three</Link>
      <Link href='/four'>Four</Link>
    </div>
  )
}

export default Header
