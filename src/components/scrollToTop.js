import React, { useEffect, useState } from "react"

// Styles
import styles from "../styles/components/scrollToTop.module.scss"
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
  }, [])

  const [visible, setVisible] = useState(false)

  const scrollHandler = () => {
    const scroll = window.pageYOffset
    if (scroll > 300 && !visible) return setVisible(true)
    setVisible(false)
  }
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className={visible ? styles.visible : styles.invisible} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  )
}

export default Scroll
