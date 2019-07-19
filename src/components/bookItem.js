import React from "react"
import { connect } from "react-redux"

// Styles
import styles from "../styles/components/bookItem.module.scss"

const BookItem = ({ book, selectBook }) => (
  <div className={styles.book} onClick={() => selectBook(book.id)} >
    <img src={book.image} alt="Book" />
    <h4>{book.title}</h4>
    <h6>{book.publisher}</h6>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    selectBook: id => dispatch({ type: `SELECT_BOOK`, id })
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(BookItem)
