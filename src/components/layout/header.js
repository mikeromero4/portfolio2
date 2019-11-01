import Navigation from "../UI/navbar/index"
import React from "react"
let navigationList = [
  "about",
  "projects",
  "contact"
]
export default () => {
  let navLinks=navigationList.map((e)=>
    <Navigation link = {e}/>
  )
  return(
    <header className='nav'>
        {navLinks}
    </header>
  )
}
