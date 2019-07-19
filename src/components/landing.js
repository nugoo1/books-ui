import React from "react"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import { FaSearch } from "react-icons/fa"
import { connect } from "react-redux"
// Styles
import styles from "../styles/components/landing.module.scss"
// Images
import bg1 from "../assets/images/bg1.png"

const Landing = ({ errors, touched, values, resetForm, startSearch }) => {
  const handleSubmit = e => {
    e.preventDefault()
    if (!values.search || errors.search) {
      console.log(errors.search || "No search value")
      return
    }
    startSearch(values.search)
    resetForm()
  }

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${bg1})` }}>
      {/* <img className={styles.image} src={bg1} alt=""/> */}
      <div className={styles.content}>
        <h1>The Treasure Trove of Online Books</h1>
        <p>
          Choose from over 140,000 stories, colouring books, e-books and more!
        </p>
        <div className={styles.buttons1}>
          <button>Story Books</button>
          <button>Educational Books</button>
        </div>
        <div className={styles.buttons2}>
          <button>Colouring Books</button>
          <button>E Books</button>
        </div>
        <div className={styles.search}>
          {touched.search && errors.search && (
            <p className={styles.error}>{errors.search}</p>
          )}
          <Form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <Field type="text" name="search" placeholder="Search" />
            <button>
              <FaSearch />
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  startSearch: searchInput => dispatch({ type: `SEARCH`, searchInput }),

})

export default withFormik({
  mapPropsToValues() {
    return {
      search: "",
    }
  },
  validationSchema: Yup.object().shape({
    search: Yup.string().required("Please enter a search value"),
  }),
})(
  connect(
    undefined,
    mapDispatchToProps
  )(Landing)
)
