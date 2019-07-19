import React, { useEffect, useState } from "react"
import BookItem from "./bookItem"
import axios from "axios"
import { connect } from "react-redux"

// Styles
import styles from "../styles/components/bookGrid.module.scss"

const BookGrid = ({ books, setBooks, search }) => {
  const [error, setError] = useState("")

  // Run API Call to get books on initial mount
  useEffect(() => {
    // The Google API returned tiny images for both thumbnail and small thumbnail, the str.replace() method is used to fix it
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&max-results=20`
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
  }, [search])

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
    search: state.search
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
