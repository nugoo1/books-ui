import React from "react"

// Styles
import styles from "../styles/components/landing.module.scss"

import bg1 from "../assets/bg1.png"

const Landing = () => (
  <div className={styles.wrapper}>
    <img className={styles.image} src={bg1} alt=""/>
    <div className={styles.content}>
      <h1>
        The Treasure Trove of Online Books
      </h1>
      <p>
        Choose from over 140,000 stories, colouring books, e-books and more!
      </p>
      <div className={styles.buttons1}>
        <button>Story Books</button>
        <button>Educational Books</button>
      </div>

      <div className={styles.buttons2}>
        <button>Colouring Books</button>
        <button>E Books</button>
      </div>
    </div>
  </div>
)

export default Landing
