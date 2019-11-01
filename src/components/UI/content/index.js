import React from "react"
import "./style.scss"

export default  ({title,children,titleSize = "sm",footer})=>
<div className = "l-content">
<h4  className = {`l-content__title--${titleSize}`}>{title}</h4>
<div className = "l-content__body">
  {children}
  </div>
  <div className = "l-content__footer">
    {footer || ""}
  </div>
  </div>
