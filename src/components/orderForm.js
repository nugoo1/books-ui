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
  errors,
  touched,
  isSubmitting,
  book,
  submitForm,
  values,
  resetForm,
}) => {
  const [step, setStep] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    submitForm({
      ...values,
    })
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

            <h4>{book.title}</h4>
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
            <Field type="name" name="name" placeholder="Name" />
          </div>
          <div
            style={step !== 2 ? { display: "none" } : {}}
            className={styles.formField}
          >
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
            <Field type="email" name="email" placeholder="Email" />
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
            <Field type="date" name="dob" placeholder="Date of Birth" />
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
                errors.name || errors.email || errors.dob
                  ? styles.disabled
                  : styles.confirm
              }
              style={step !== 3 ? { display: "none" } : {}}
              disabled={
                isSubmitting || errors.name || errors.email || errors.dob
              }
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
