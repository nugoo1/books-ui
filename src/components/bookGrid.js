import React, { useEffect, useState } from "react"
import BookItem from "./bookItem"
import axios from "axios"
import { connect } from "react-redux"

// Styles
import styles from "../styles/components/bookGrid.module.scss"

const BookGrid = ({ books, setBooks }) => {
  const [error, setError] = useState("")

  // Run API Call to get Books
  useEffect(() => {
    // The Google API returned tiny images for both thumbnail and small thumbnail, the str.replace() method is used to fix it
    // Google API sometimes returns 403 Forbidden with exceeded usage
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=coloring%20books&max-results=20"
        )
        const books = await res.data.items.map(({ volumeInfo, id, searchInfo }) => ({
          id: id,
          title: volumeInfo.title,
          description: searchInfo.textSnippet,
          authors: volumeInfo.authors,
          publisher: volumeInfo.publisher,
          image: volumeInfo.imageLinks.thumbnail.replace("zoom=1", "zoom=2"),
          thumbnail: volumeInfo.imageLinks.smallThumbnail,
        }))
        setBooks(books)
      } catch (e) {
        setError(e.message)
      }
    }
    fetchBooks()

    return () => {
      setError("")
    }
  }, [])

  return (
    <div className={styles.grid}>
      {books.map((book, idx) => (
        <BookItem key={idx} book={book} />
      ))}
      {error && <p className={styles.error}>{error}. Please Try Again..</p>}
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch({ type: `SET_BOOKS`, books }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookGrid)
