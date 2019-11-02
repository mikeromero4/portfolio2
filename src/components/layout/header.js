import Navigation from "../UI/navbar/index"
import Headroom from "react-headroom"
import React from "react"
let navigationList = ["about", "projects", "contact"]
export default ({height}) => {
  let navLinks = navigationList.map(e => <Navigation link={e} />)
  return (
    <header >
      <Headroom offset={0} tolerance="10" pinStart={height}>
        <nav className="nav">{navLinks}</nav>
      </Headroom>
    </header>
  )
}
