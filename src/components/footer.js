import React from "react"

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"

const footer = () => (
  <div className="footer">
    <div id="button"></div>
    <div id="container">
      <div id="cont">
        <div className="footer_center">
          <h3>Book Store</h3>
          <p>Personalised books for everyone</p>
          <a href="https://www.stem.lk" target="blank">
            <FaFacebook color="#ff7979" />
          </a>
          <a href="https://www.stem.lk" target="blank">
            <FaInstagram color="#686de0" />
          </a>
          <a href="https://www.stem.lk" target="blank">
            <FaEnvelope color="#22a6b3" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default footer
