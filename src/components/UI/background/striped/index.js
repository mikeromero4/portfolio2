import React from "react"
import "./style.scss"
export default ({variation}) =>
<div  className={"striped-bg striped-bg--"+variation+""}>
  <div className={"striped-bg__layer striped-bg--"+variation+"__layer__1"}>
    <div className={"striped-bg__layer striped-bg--"+variation+"__layer__2"}/>
  </div>
</div>