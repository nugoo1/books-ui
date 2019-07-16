import React from "react"

// Styles
import styles from '../styles/components/categoryItem.module.scss'

const CategoryItem = ({ category }) => (
  <div className={styles.category}>
    <img src={category.image} alt="Book" />
    <h4>{category.title}</h4>
    <p>{category.description}</p>
  </div>
)

export default CategoryItem