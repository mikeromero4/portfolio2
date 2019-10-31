
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

let navigationList = [
  "about",
  "projects",
  "contact"
]

const NavigationItem = (props)=>(
  <div className='nav__item'>
    <AnchorLink href = {"#"+props.link + "-section"}>
      <div className='nav__link'>
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
    <header className='nav'>
        {navLinks}
    </header>
  )
}
