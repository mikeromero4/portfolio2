import React from "react"
import { useState, useEffect } from "react"
import "./animation.scss"
import Waves from "./sineWave"
import Icons from "./icons"
import { relative } from "path"

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
          <div ref={el} style={{position:'relative', height: "100%" }}>
      <div style={{position:'absolute',bottom: (height*(35/100) + settings.iconSize/2 + 50 +"px") }} >
        <Icons  settings={settings} time={time} />
      </div>
      </div>
      <Waves settings={settings} time={time} />
    </div>
  )
}
