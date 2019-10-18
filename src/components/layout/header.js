
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

let navigationList = [
  "about",
  "projects",
  "contact"
]

const NavigationItem = (props)=>(
  <div className='nav-item'>
    <AnchorLink href = {"#"+props.link + "-section"}>
      <div className='nav-link'>
        {props.link}
      </div>
    </AnchorLink>
  </div>
)

export default () => {
  let navLinks=navigationList.map((e)=>
    <NavigationItem link = {e}/>
  )
  return(
    <header>
        {navLinks}
    </header>
  )
}
