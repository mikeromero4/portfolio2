//Excuse the code block below, I'll get around to refactoring and abstracting this code.. eventually
import React from "react" //shame
import { useState,useEffect } from "react" //shame
import { Icon } from '@iconify/react'; //shame
import gatsby from '@iconify/icons-logos/gatsby'; //shame
import netlify from '@iconify/icons-logos/netlify'; //shame
import redux from '@iconify/icons-logos/redux'; //shame
import react from '@iconify/icons-logos/react'; //shame
import aws from '@iconify/icons-logos/aws'; //shame
import sass from '@iconify/icons-logos/sass'; //shame
import sql from '@iconify/icons-logos/mysql';  //shame
import html from '@iconify/icons-logos/html-5'; //shame
import js from '@iconify/icons-logos/javascript'; //shame
import css from '@iconify/icons-logos/css-3'; //shame
let icons=[aws,react,redux,netlify,gatsby,html,css,js,sass,sql]//shame
let calc=({time,index,settings,width})=>{
    //this is the responsive animated sinewave recipe.
    //given the index number for an item, along with the current animation time, optional settings and the width of its parent container
    let {speed,amplitude,flowSpeed=20,fadeCutoff=4}=settings//shame
    let frequency=Math.max(settings.frequency,width/12)//shame
    let items = Math.min(icons.length, Math.ceil((width/(settings.iconSize+settings.spacing))))//shame
    let x=(((index*(width/(items))/speed)+time)*speed)%width//shame
    let y=Math.sin(x/frequency+time/flowSpeed) * amplitude//shame
    let opacity= fadeCutoff-(Math.abs(x-(width-settings.iconSize)/2)/((width-settings.iconSize)/2))*fadeCutoff//shame
    return{x,y,opacity}
}


let Item=(props)=> {
    let{x,y,opacity}=calc(props)
    //if shrink setting is true,
    let size = props.settings.shrink?Math.min((opacity/2),0.9):1
    return(<div className = "animated-icon" style = {{
        opacity:opacity,
        transform:`translate(${x}px, ${y}px)
        scale(${size})`
    }}> 
        <Icon width={props.iconSize} height ={props.iconSize}icon={icons[props.index]}/> 
    </div>)
}

function createPath(props){
    let xs=[]
    let {time,settings: {lineHeight,half,amplitude,flowSpeed=20,frequency=100,skew=0,yOffset=0},width}=props
    frequency=Math.max(frequency,width/12)
    for (let i=0;i<width;i++) {
        xs.push(i-skew)
    }
    let points = xs.map(x => {
        let y=yOffset+amplitude*1+Math.sin(x/frequency+time/flowSpeed) * (amplitude)
        return [x, y]
      })


      if (half || !lineHeight){
          //this draws one curved side and one flat side
        points=[[0,0],...points]
        points.push([width,0])
      }
      else{
          //this draws 2 curved sides 
          points = [...points,...points.map((e)=>[e[0]+skew,e[1]+lineHeight]).reverse()]
      }
      let path = "M" + points.map(p => {
        return p[0] + "," + p[1]
      }).join(" L")
      return path
}
let Curve = (props)=><div id='curve'>
<svg style={{fill:props.settings.color }}width={props.width} 
height={props.settings.amplitude*2.5+props.settings.lineHeight+(props.settings.yOffset||0)}>
    <path d={createPath(props)}/>
</svg></div>


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
    for (let i=0;i<Math.min(icons.length, width/(props.settings.iconSize+props.settings.spacing));i++) {
        items.push(<Item 
            index={i} time={timer} width={width} settings={props.settings} iconSize={props.settings.iconSize}
        />)}

   return<div ref={el}>
       <div id = "icon-animation">{items}</div>
 <Curve {...{time:timer,settings:{color:'rgba(200, 200, 250, 0.4)',yOffset:20,skew:10,...props.settings,lineHeight:100,half:false},width:width}}/>
 <Curve {...{time:timer,settings:{color:'rgba(200, 200, 255, 0.36)',skew:10,...props.settings,lineHeight:200},width:width}}/>

 <Curve {...{time:timer,settings:{color:'rgba(200, 200, 255, 0.36)',skew:10,...props.settings,lineHeight:50,yOffset:70},width:width}}/>
 <Curve {...{time:timer,settings:{color:'rgba(200, 200, 255, 0.36)',skew:10,...props.settings,lineHeight:20,yOffset:140},width:width}}/>

    </div>
 
}

