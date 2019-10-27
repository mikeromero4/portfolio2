import React from "react"
import Animation from "./animation/animation"
import Headroom from "react-headroom"

import Header from "../layout/header"

export default()=><>

<div className='stretch'>
<Headroom offset="400" tolerance="27"
pinStart ={590}
>
<Header siteTitle={"my portfolio"} />
</Headroom >
<div id = "intro" style={{flexGrow:1,flexBasis:"50%",}}>
<div className = "striped-bg striped-bg__layer1">    
    <div className = "striped-bg striped-bg__layer2"></div>
</div>
<div className = "inner-container">
   <h2>Michael Romero</h2>
   <h3>Front-end Web developer specializing in modern JavaScript,React and responsive design.</h3>
   </div>
   </div>
<div className = "animation">
<Animation settings={{ 
        speed:.4,
        frequency:120,
        amplitude:8,
        flowSpeed:90,
        iconSize:60,
        spacing:80,
        lineHeight:50,
        half:false,
        shrink:false
}}/>
</div>
</div>

</>
