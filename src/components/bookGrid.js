import React from "react"
import BookItem from "./bookItem"

// Styles
import styles from "../styles/components/bookGrid.module.scss"

const books = [
  {
    id: "1",
    title: "Princess Poko",
    published: "2005",
    author: "Peach Fuzz",
    image: "http://static.bedtimez.com/wp-content/uploads/2017/01/04102439/Charlottes-Web.jpg",
  },
  {
    id: "2",
    title: "My Friend Totoro",
    published: "1998",
    author: "Totoro San",
    image: "https://images.unsplash.com/photo-1561383507-2777ad5d74a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "3",
    title: "Bears and Pandas",
    published: "2015",
    author: "Mary Poppers",
    image: "https://m.media-amazon.com/images/I/71tWaxdJNWL._AC_UL436_.jpg",
  },
  {
    id: "4",
    title: "Sharing is Caring",
    published: "2009",
    author: "Mindy Jones",
    image: "https://d1xfgk3mh635yx.cloudfront.net/sites/default/files/styles/original/public/image/featured/1017351-wgbh-options-best-selling-children-s-series-pinkalicious.jpg?itok=WvIE9Haa",
  },
]

const BookGrid = () => (
  <div className={styles.grid}>
    {books.map((book, idx) => (
      <BookItem key={idx} book={book} />
    ))}
    {books.map((book, idx) => (
      <BookItem key={idx} book={book} />
    ))}
  </div>
)

export default BookGrid