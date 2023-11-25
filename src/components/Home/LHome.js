import React from 'react'
import style from "./LHome.module.css"
import home from "../../Assets/home.png"
import lock from "../../Assets/lock.png"

function LHome() {
  return (
    <div className={style.L_home}>
      <img src={home} alt="" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className={style.L_home_bottom}>
        <img src={lock} alt="" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default LHome