import React from "react"
import { Link } from "gatsby"
import Navdrawer from "./navdrawer"
import Scroll from './scrollToTop'

// Images
import logo from "../assets/images/logo-2x.png"

// Styles
import styles from "../styles/components/navbar.module.scss"

const navbar = () => {
  return (
    <div className={styles.navbar}>
      {/* Main Navigation */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={styles.links}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/books">
          <li>Books</li>
        </Link>
        <Link to="/order">
          <li className={styles.action}>Order Now</li>
        </Link>
      </ul>
      <Navdrawer />
      <Scroll />
    </div>
  )
}

export default navbar
