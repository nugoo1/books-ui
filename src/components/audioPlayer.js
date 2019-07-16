import React from "react"
import audio from '../assets/story-audio.mp3'

// Styles
import styles from '../styles/components/player.module.scss'

const Player = () => (
  <audio controls src={audio} className={styles.player}>
    Your browser does not support the
    <code>audio</code> element.
  </audio>
)

export default Player
