import React from 'react'

// Styles
 import styles from '../styles/components/heading.module.scss'

const Heading = props => (
    <div>
        <h1 className={styles.title}>{props.title}</h1>
        <h4 className={styles.subtitle}>{props.subtitle}</h4>
    </div>
)

export default Heading