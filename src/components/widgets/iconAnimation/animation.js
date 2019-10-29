import React from "react"
import { useState, useEffect } from "react"
import "./animation.scss"
import Waves from "./sineWave"
import Icons from "./icons"

//this should probably(?) be a class component due to increased use of hooks
export default props => {
  let [time, setTimer] = useState(0)
  const requestRef = React.useRef()
  const el = React.useRef()
  let width = el.current ? el.current.offsetWidth : 0
  let height = el.current ? el.current.offsetHeight : 0

  useEffect(function() {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
      
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])
  function animate(time) {
    setTimer(time / 10)
    requestRef.current = requestAnimationFrame(animate)
  }

  let settings = {
    ...props.settings,
    iconSize:50,
    width,
    height,
  }
  return (
    <div className="animation">
      <div style={{ height: "100%" }} ref={el}>
        <Icons  settings={settings} time={time} />
      </div>
      <Waves settings={settings} time={time} />
    </div>
  )
}
