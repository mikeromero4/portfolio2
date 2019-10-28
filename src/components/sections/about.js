import React from "react"
import Animation from "../widgets/iconAnimation/animation"
import Headroom from "react-headroom"
import Header from "../layout/header"

let animationSettings={ 
    speed:.4,
    frequency:120,
    amplitude:8,
    flowSpeed:90,
    iconSize:60,
    spacing:80,
    lineHeight:50,
    half:false,
    shrink:false
}

export default()=><>

<div className='stretch'>
this is the about page
</div>

</>

let StripedBackground = ()=>
<div className = "striped-bg striped-bg__layer1">    
    <div className = "striped-bg striped-bg__layer2"/>
</div>
