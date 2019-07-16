import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

// Styles
import styles from "../styles/components/layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
