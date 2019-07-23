import React, { useState } from "react"
import { FaAddressCard, FaEnvelope, FaBirthdayCake } from "react-icons/fa"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"

// Styles
import styles from "../styles/components/orderForm.module.scss"

const yes = "#22a6b3"
const no = "#f0932b"

const OrderForm = ({
  book,
  category,
  // Formik
  errors,
  touched,
  isSubmitting,
  submitForm,
  values,
  resetForm,
}) => {
  const [step, setStep] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    if (
      !values.name ||
      !values.email ||
      !values.dob ||
      errors.name ||
      errors.email ||
      errors.dob
    ) {
      return
    }
    submitForm({
      ...values,
    })
    navigate("/checkout")
    resetForm()
  }
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <FaAddressCard
          color={step === 1 ? yes : no}
          onClick={() => setStep(1)}
        />
        <FaEnvelope color={step === 2 ? yes : no} onClick={() => setStep(2)} />
        <FaBirthdayCake
          color={step === 3 ? yes : no}
          onClick={() => setStep(3)}
        />
      </div>
      <div className={styles.content}>
        {book && (
          <div className={styles.book}>
            <img src={book.image} alt="Book" />
            <h4>{`${book.title} ${category}`}</h4>
            <p>{book.description}</p>
          </div>
        )}

        <Form className={styles.form} onSubmit={handleSubmit}>
          {/* Step 1 */}
          <div
            style={step !== 1 ? { display: "none" } : {}}
            className={styles.formField}
          >
            {touched.name && errors.name && (
              <p className={styles.error}>{errors.name}</p>
            )}
            <label>
              Name
              <Field
                type="name"
                name="name"
                placeholder="Name"
                focused="true"
              />
            </label>
          </div>
          <div
            style={step !== 2 ? { display: "none" } : {}}
            className={styles.formField}
          >
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
            <label>
              Email
              <Field type="email" name="email" placeholder="Email" />
            </label>
          </div>
          <div
            style={step !== 3 ? { display: "none" } : {}}
            className={styles.formField}
          >
            {errors.name && <p className={styles.error}>{errors.name}</p>}
            {errors.email && <p className={styles.error}>{errors.email}</p>}
            {touched.dob && errors.dob && (
              <p className={styles.error}>{errors.dob}</p>
            )}
            <label>
              Date of Birth
              <Field type="date" name="dob" placeholder="Date of Birth" />
            </label>
          </div>
          {/* Controls */}
          <div className={styles.footer}>
            <button
              className={styles.prev}
              type="button"
              onClick={() => setStep(step - 1)}
              style={step === 1 ? { display: "none" } : {}}
            >
              Prev
            </button>

            <button
              className={styles.next}
              type="button"
              onClick={() => setStep(step + 1)}
              style={step === 3 ? { display: "none" } : {}}
            >
              Next
            </button>

            <button
              type="submit"
              className={
                isSubmitting ||
                errors.name ||
                errors.email ||
                errors.dob ||
                !values.name ||
                !values.email ||
                !values.dob
                  ? styles.disabled
                  : styles.confirm
              }
              style={step !== 3 ? { display: "none" } : {}}
            >
              Confirm
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    book: state.books.find(book => book.id === state.book),
    category: state.category
  }
}

const mapDispatchToProps = dispatch => ({
  submitForm: userInfo => dispatch({ type: `SUBMIT_FORM`, userInfo }),
})

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      dob: "",
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Please enter email address"),
    dob: Yup.string().required("Please enter your date of birth"),
  }),
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderForm)
)
