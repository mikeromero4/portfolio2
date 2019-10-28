import React from "react"
import Animation from "../widgets/iconAnimation/animation"
import Headroom from "react-headroom"
import Header from "../layout/header"

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

export default () => (
  <section id="section--intro" className="full-screen flex flex--vertical">
    <Navigation />
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
    <Animation settings={animationSettings} />
  </section>
)

let Navigation = () => (
  <Headroom offset="400" tolerance="27" pinStart={590}>
    <Header siteTitle={"my portfolio"} />
  </Headroom>
)

let StripedBackground = () => (
  <div className="striped-bg striped-bg__layer1">
    <div className="striped-bg striped-bg__layer2" />
  </div>
)
