import React from "react"
import "./style.scss"

export default  ({title,children,titleSize = "sm",footer,modifier})=>
<div className = {`l-content${modifier?` l-content--${modifier}`:''}`}>
<h4  className = {`l-content__title l-content__title--${titleSize}`}>{title}</h4>
<div className = "l-content__body">
  {children}
  </div>
  <div className = "l-content__footer">
    {footer || ""}
  </div>
  </div>
