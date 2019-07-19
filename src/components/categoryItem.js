import React from "react"
import { connect } from "react-redux"

// Styles
import styles from '../styles/components/categoryItem.module.scss'

const CategoryItem = ({ category, selectCategory }) => (
  <div className={styles.category} onClick={() => selectCategory(category.title)}>
    <img src={category.image} alt="Book" />
    <h4>{category.title}</h4>
    <p>{category.description}</p>
  </div>
)


const mapDispatchToProps = dispatch => {
  return {
    selectCategory: category => dispatch({ type: `SELECT_CATEGORY`, category })
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(CategoryItem)
