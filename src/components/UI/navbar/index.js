import React from "react"

import "./style.scss"

import AnchorLink from 'react-anchor-link-smooth-scroll'
export default (props)=>(
  <div className='nav__item'>
    <AnchorLink href = {"#"+props.link + "-section"}>
      <div className='nav__link'>
        {props.link}
      </div>
    </AnchorLink>
  </div>
)