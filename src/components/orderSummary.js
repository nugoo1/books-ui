import React from "react"
import { connect } from "react-redux"
import BookItem from "./bookItem"
import { navigate } from "gatsby"

// Styles
import styles from "../styles/components/orderSummary.module.scss"

const OrderSummary = ({ userInfo, book, category }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {book && <BookItem book={book} />}

      <div className={styles.userInfo}>
        {userInfo && (
          <div>
            <h6>Name</h6>
            <p>{userInfo.name}</p>
            <h6>Email</h6>
            <p>{userInfo.email}</p>
            <h6>Date of Birth</h6>
            <p>{userInfo.dob}</p>
          </div>
        )}
      </div>
    </div>
    <div className={styles.footer}>
      <button
        onClick={() => {
          alert("Thank You. Please Come Again!")
          navigate("/")
        }}
      >
        Confirm
      </button>
    </div>
  </div>
)

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    book: state.books.find(book => book.id === state.book),
    category: state.category,
  }
}

export default connect(mapStateToProps)(OrderSummary)
