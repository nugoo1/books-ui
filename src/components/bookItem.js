import React from "react"

// Styles
import styles from '../styles/components/bookItem.module.scss'

const BookItem = ({ book }) => (
  <div className={styles.book}>
    <img src={book.image} alt="Book" />
    <h4>{book.title}</h4>
  </div>
)

export default BookItem