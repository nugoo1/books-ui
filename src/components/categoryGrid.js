import React from "react"
import CategoryItem from "./categoryItem"

// Styles
import styles from "../styles/components/categoryGrid.module.scss"

const categories = [
  {
    id: "1",
    title: "ABC Story",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517yua7XQ3L.jpg",
  },
  {
    id: "2",
    title: "ABC Coloring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61LmZV%2BB%2BUL._SX384_BO1,204,203,200_.jpg",
  },
  {
    id: "3",
    title: "ABC e-Book",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    image: "https://rukminim1.flixcart.com/image/832/832/jg15aq80/book/3/4/9/fairy-tales-story-books-for-kids-great-fairy-tales-pinocchio-original-imaf4d7qz8cfjjkh.jpeg?q=70",
  },
  {
    id: "4",
    title: "ABC e-Coloring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51bV22fNGDL._SX384_BO1,204,203,200_.jpg",
  },
]

const CategoryGrid = () => (
    <div className={styles.grid}>
      {categories.map((category, idx) => (
        <CategoryItem key={idx} category={category} />
      ))}
    </div>
)

export default CategoryGrid
