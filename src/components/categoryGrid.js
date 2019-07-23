import React from "react"
import CategoryItem from "./categoryItem"
import { connect } from 'react-redux'

// Styles
import styles from "../styles/components/categoryGrid.module.scss"

const CategoryGrid = ({ categories }) => (
  <div className={styles.grid}>
    {categories.map((category, idx) => (
      <CategoryItem key={idx} category={category} />
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

export default connect(mapStateToProps)(CategoryGrid)
