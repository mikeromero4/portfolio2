import React from "react"
import "./style.scss"
// this component layers a given array of subcomponents on top of each other.
export default ({layers})=><div className = "layer-container">
    {layers.map((component,index)=>
        <div className = {`layer-container__layer layer-${index}`}
        style = {{zIndex:index}}>
            {component}
        </div>)}
    </div>