import React from "react"
import { useState,useEffect } from "react"
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

let Item=(props)=> {
    let{x,y,opacity}=calc(props)
    return(<div className = "animated-icon" style = {{
        opacity:opacity,
        transform:`translate(${x}px, ${y}px)
        scale(${Math.min((opacity/2),0.9)})`
    }}> 
        <Icon width={40} height ={40}icon={icons[props.index]}/> 
    </div>)
}

function createPath(time,settings,width){
    let {speed,frequency,amplitude,flowSpeed=20,fadeCutoff=3}=settings
    //responsive moving sinewave-node recipe:
    let xs = []
    for (let i=0;i<width;i++) {
        xs.push(i)
    }
    let points = xs.map(x => {
    
        let y=amplitude*1+Math.sin(x/frequency+time/flowSpeed) * (amplitude)

        return [x, y]
      })
      
      points=[[0,0],...points]
      points.push([width,0])
      let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
      }).join(" L")
      
    return(path)
}
let calc=({time,index,settings,width})=>{
    let {speed,frequency,amplitude,flowSpeed=20,fadeCutoff=3}=settings
    //responsive moving sinewave-node recipe:
    let items = Math.min(icons.length, Math.ceil((width/60)))
    let spacing=0
    let x=(((index*(width/(items))/speed)+time)*speed)%width
    let y=Math.sin(x/frequency+time/flowSpeed) * amplitude
    let opacity= fadeCutoff-(Math.abs(x-width/2)/(width/2))*fadeCutoff
    return{x,y,opacity}
}

export default (props)=>  {
    let [timer,setTimer] = useState(0)
    const requestRef = React.useRef()
    const el = React.useRef()

    let width=(el.current?el.current.offsetWidth:0)

    useEffect(function(){
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    },[])
    function animate(time){
        setTimer(time/10)
        requestRef.current=requestAnimationFrame(animate)
    }
    let items = []
    for (let i=0;i<Math.min(icons.length, width/60);i++) {
        items.push(<Item 
            index={i} time={timer} width={width} settings={props.settings}
        />)}
    let path = createPath(timer,props.settings,width)

   return<div ref={el}>
       <div id = "icon-animation">{items}</div>

   <div id='curve'>
    <svg width={width} height={props.settings.amplitude*2.5}><path d={path}/></svg></div>
    </div>
 
}