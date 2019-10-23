import React from "react"
import Animation from "./animation"


export default()=><>
    <div className = "type2" id = "fixedBackground">    
    <div className = "type2" id = "fixedBackground2"></div>
    <div className = "type2" id = "fixedBackground3"></div>
</div>
<div id = "intro" >
   <h2>Michael Romero</h2>
   <h3>Front-end Web developer specializing in modern JavaScript,React and responsive design.</h3>
   </div>
<div style = {{position:"absolute",width:"100%",marginTop:'10px',height:"100%",overflow:"hidden"}}>
<Animation settings={{ 
        speed:.4,
        frequency:120,
        amplitude:8,
        flowSpeed:90,
        iconSize:50,
        spacing:40,
        lineHeight:50,
        half:false,
        shrink:false
}}/>
</div>
</>
