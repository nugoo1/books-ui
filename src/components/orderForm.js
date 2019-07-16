import React from "react"
import { FaAddressCard, FaTshirt, FaImage, FaCartPlus } from "react-icons/fa"
// Styles
import styles from "../styles/components/orderForm.module.scss"

const yes = "#22a6b3"
const no = "#f0932b"

class OrderForm extends React.Component {
  state = {
    step: 1,
    name: "",
    address: "",
    clothes: "",
    selectedFile: null,
  }

  handleNext = () => {
    if (this.state.step === 4) return this.handleSubmit()
    this.setState(prevState => ({
      ...prevState,
      step: prevState.step + 1,
    }))
  }

  handleSubmit = () => {
    alert("")
  }

  handlePrev = e => {
    this.setState(prevState => ({
      ...prevState,
      step: prevState.step - 1,
    }))
  }

  setStep = step => {
    this.setState({
      step,
    })
  }

  onChangeHandler = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  fileUploadHandler = e => {
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  }

  render() {
    return (
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <FaAddressCard
            color={this.state.step === 1 ? yes : no}
            onClick={() => this.setStep(1)}
          />
          <FaTshirt
            color={this.state.step === 2 ? yes : no}
            onClick={() => this.setStep(2)}
          />
          <FaImage
            color={this.state.step === 3 ? yes : no}
            onClick={() => this.setStep(3)}
          />
          <FaCartPlus
            color={this.state.step === 4 ? yes : no}
            onClick={() => this.setStep(4)}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.book}>
            <img
              src="http://static.bedtimez.com/wp-content/uploads/2017/01/04102439/Charlottes-Web.jpg"
              alt="Book"
            />
            <h4>Charlotte's Web</h4>
            <p>$9.99</p>
          </div>

          <form className={styles.form}>
            {/* Step 1 */}
            <div style={this.state.step !== 1 ? { display: "none" } : {}}>
              <label htmlFor="name">
                Your Name
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeHandler}
                  placeholder="Type your name here"
                  style={{ textTransform: "capitalize" }}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeHandler}
                  placeholder="Your Email"
                />
              </label>
              <label htmlFor="address">
                Address
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChangeHandler}
                  placeholder="Your Address"
                />
              </label>
            </div>

            {/* Step 2 */}
            <div style={this.state.step !== 2 ? { display: "none" } : {}}>
              <label htmlFor="clothes">
                Clothes
                <input
                  type="text"
                  name="clothes"
                  value={this.state.clothes}
                  onChange={this.onChangeHandler}
                  placeholder="Type your clothes here"
                />
              </label>
            </div>

            {/* Step 3 */}
            <div style={this.state.step !== 3 ? { display: "none" } : {}}>
              <label htmlFor="clothes">
                Upload Your Image
                <input
                  type="file"
                  name="file"
                  onChange={this.fileUploadHandler}
                />
              </label>
            </div>

            {/* Step 4 */}
            <div style={this.state.step !== 4 ? { display: "none" } : {}}>
              <h3>Confirm Details</h3>
              <h4>Name</h4>
              <p>{this.state.name}</p>

              <h4>Email</h4>
              <p>{this.state.email}</p>

              <h4>Address</h4>
              <p>{this.state.address}</p>

              <h4>Clothes</h4>
              <p>{this.state.clothes}</p>
            </div>
          </form>
        </div>

        {/* Controls */}
        <div className={styles.footer}>
          <button
            className={styles.prev}
            onClick={this.handlePrev}
            style={this.state.step === 1 ? { display: "none" } : {}}
          >
            Prev
          </button>

          <button className={styles.next} onClick={this.handleNext}>
            {this.state.step === 4 ? "Confirm" : "Next"}
          </button>
        </div>
      </div>
    )
  }
}

export default OrderForm
