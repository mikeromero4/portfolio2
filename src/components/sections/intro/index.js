import React from "react"
import Animation from "../../widgets/iconAnimation/animation"
import StripedBackground from "../../UI/background/striped/index"
import "./style.scss"

let animationSettings = {
  speed: 0.4,
  frequency: 120,
  amplitude: 8,
  flowSpeed: 90,
  iconSize: 60,
  spacing: 80,
  lineHeight: 50,
  half: false,
  shrink: false,
}

export default () => {
  return <section  id="section--intro">
    <Intro/>
    <Animation settings={animationSettings} />
  </section>
}


let Intro=()=>
  <div id="intro" style={{ flexGrow: 1, flexBasis: "50%" }}>
      <StripedBackground />
      <div className="inner-container">
        <h2>Michael Romero</h2>
        <h3>
          Front-end Web developer specializing in modern JavaScript,React and
          responsive design.
        </h3>
      </div>
    </div>

