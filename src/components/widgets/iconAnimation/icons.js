import React from "react"
import { Icon } from "@iconify/react"
import gatsby from "@iconify/icons-logos/gatsby"
import netlify from "@iconify/icons-logos/netlify"
import redux from "@iconify/icons-logos/redux"
import react from "@iconify/icons-logos/react"
import aws from "@iconify/icons-logos/aws"
import sass from "@iconify/icons-logos/sass"
import sql from "@iconify/icons-logos/mysql"
import html from "@iconify/icons-logos/html-5"
import js from "@iconify/icons-logos/javascript"
import css from "@iconify/icons-logos/css-3"
let icons = [aws, react, redux, netlify, gatsby, html, css, js, sass, sql]

export default props => {
  let waveProperties = calculateWaveProperties(props.settings)
  let items = icons.map((e, i) => (
    <Item
      index={i}
      time={props.time}
      settings={{ ...props.settings, ...waveProperties }}
    />
  ))
  return <>{items}</>
}
let Item = props => {
  let { height } = props.settings
  let { x, y, opacity,display } = calculateIconPosition(props)
  let size = props.settings.shrink ? Math.min(opacity / 2, 0.9) : 1
  return (
    <div
      className="icon-container"
      id="icon-animation"
    >
      <div
        className="animated-icon"
        style={{
          opacity: opacity,
          display:(display===true?'unset':'none'),
          transform: `translate(${x}px, ${y}px)
          scale(${size})`,
        }}
      >
        <Icon
          width={props.settings.iconSize}
          height={props.settings.iconSize}
          icon={icons[props.index]}
        />
      </div>
    </div>
  )
}


function calculateIconPosition ({ time, index, settings }){
    const { speed, amplitude, width, totalLength, spacing, frequency, flowSpeed = 20, fadeCutoff = 4,} = settings
    let display=true
    ,x = ((index * spacing) / speed + time) * speed;    // x position of icon
    x %= totalLength                                   // Loop the movement on X axis
    let waveX = x / frequency + time / flowSpeed       // the x coordinate (phase) of the sine wave
    let y = Math.sin(waveX) * amplitude                // the y coordinate of the sine wave
    let center = (width - settings.iconSize) / 2       // center of the screen (offset by icon size)
    let opacity = fadeCutoff - (Math.abs(x - center) / center) * fadeCutoff // opacity that fades in and out at the edges of the screen
    if (opacity<=0.01) {
      display = false
    }
    return { x: x, y, opacity,display }
  }


  function calculateWaveProperties(settings) {
    let { width, iconSize, spacing: desiredSpacing } = settings
    const MIN_SINE_WAVE = 12                       // min allowed wave frequency (proportional to component width)
    let frequency = Math.max(settings.frequency, width / MIN_SINE_WAVE)
    let visibleIcons = Math.min(                   //calculate amount of visible icons displayed at a time
      icons.length,
      Math.ceil(width / (iconSize + desiredSpacing))
    )
    let spacing = width / visibleIcons             // calculate actual spacing between icons
    let totalLength = icons.length * spacing       // total length(px) of the icon animation (including invisible icons)
    return { totalLength, spacing, frequency }
  }