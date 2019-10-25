import React from "react"
import Animation from "./animation"


export default()=><>

<div className='stretch'>

<div id = "intro" style={{flexGrow:1,flexBasis:"50%",}}>
<div className = "type2" id = "fixedBackground">    
    {/* <div className = "type2" id = "fixedBackground2"></div> */}
    <div className = "type2" id = "fixedBackground3"></div>
</div>
   <h2>Michael Romero</h2>
   <h3>Front-end Web developer specializing in modern JavaScript,React and responsive design.</h3>
   </div>
<div style = {{flexGrow:1,flexBasis:"50%",background:'#8ae0f0',position:"relative",width:"100%",overflow:"hidden"}}>
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
</div>

</>
