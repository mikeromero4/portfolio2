import React, { useState,useEffect } from "react"
import { Icon } from '@iconify/react';
import gatsby from '@iconify/icons-logos/gatsby';
import netlify from '@iconify/icons-logos/netlify';
import redux from '@iconify/icons-logos/redux';
import react from '@iconify/icons-logos/react';
import aws from '@iconify/icons-logos/aws';
import sass from '@iconify/icons-logos/sass';
import sql from '@iconify/icons-logos/mysql'; 
import html from '@iconify/icons-logos/html-5';
import js from '@iconify/icons-logos/javascript';
import css from '@iconify/icons-logos/css-3';


let icons=[aws,react,redux,netlify,gatsby,html,css,js,sass,sql]
let calc=({time,index,settings})=>{
    let {w,speed,frequency,amplitude,flowSpeed=20,fadeCutoff=3}=settings
    //create secret sinewave sauce:
    let x=(((index*(w/icons.length)/speed)+time)*speed)%w
    ,y=Math.sin(x/frequency+time/flowSpeed) * amplitude
    ,opacity= fadeCutoff-(Math.abs(x-w/2)/(w/2))*fadeCutoff
    return{x,y,opacity}
}

let Animation = (props)=>  {
    let [time,setTimer] = useState(0)
    const requestRef = React.useRef()
    useEffect(function(){
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    },[])
    function animate(time){
        
        setTimer(time/10)
        requestRef.current=requestAnimationFrame(animate)
    }
    let items = []
    for (let i=0;i<icons.length;i++) {
        items.push(<Item 
            index={i} time={time} settings={props.settings}
        />)}
   return <div id = "icon-animation">{items}</div>
}



let Item=(props)=> {
    let{x,y,opacity}=calc(props)
    return(<div className = "animated-icon" style = {{
         opacity:(opacity),
        transform:'translate('+x+'px,'+y+'px)'
    }}> 
        <Icon width={40} height = {40}icon={icons[props.index]}/> 
    </div>)
}

export default()=><><div id = "intro">
   <h2>Michael Romero</h2>
   <h3>Front-end Web developer specializing in modern JavaScript,React and responsive design.</h3>
   </div>
<Animation settings={{
        w:840,
        speed:.5,
        frequency:90,
        amplitude:3,
        flowSpeed:20
}}/>
</>
