import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"

// Styles
import styles from "../styles/components/categoryItem.module.scss"

const CategoryItem = ({ category, selectCategory, book }) => (
  <div className={styles.category}>
    {book && category ? (
      <div onClick={() => selectCategory(category)}>
        <img src={book.image} alt="Book" />
        <h4>{category}</h4>
        <p>{book.description}</p>
      </div>
    ) : (
      <Link to="/">
        <p className={styles.error}>Please select a book to continue!</p>
      </Link>
    )}
  </div>
)

const mapStateToProps = state => {
  return {
    book: state.books.find(book => book.id === state.book),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => dispatch({ type: `SELECT_CATEGORY`, category }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
