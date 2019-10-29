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

export default () => {
  let element =  React.useRef()
  let sectionHeight = element.current ? element.current.offsetHeight : 0
  let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
  return <section ref={element} id="section--intro">
    <Navigation {...{sectionHeight}}/>
    <Intro/>
    <Animation settings={animationSettings} />
  </section>
}

let Navigation = (props) => 
  <Headroom offset={0} tolerance="10" pinStart={props.sectionHeight}>
    <Header siteTitle={"my portfolio"} />
  </Headroom>

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

let StripedBackground = () =>
  <div className="striped-bg striped-bg__layer1">
    <div className="striped-bg striped-bg__layer2" />
  </div>
