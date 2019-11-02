import React from "react" //shame
export default ({time,settings})=>{
  let {height,width}=settings
  let centerHeight= Math.max(height/4,60)
  let curves = [
    {
      yOffset:0,
      lineHeight: height-30,
      flowSpeed: -40,
    },
    {
      yOffset:height*(25/100),
      lineHeight: height/2,
      flowSpeed: -70,
    },
    {
      yOffset:height*(35/100),
      lineHeight:centerHeight, 
    },
    {
      half:true,
      yOffset:0,
      lineHeight: height/10,
    },
  ]
  return curves.map((e,index)=> 
  <Curve  data={{time, width,...settings,...e,index}}/>
  )
}

let Curve = ({data}) => (
      <div 
        className={'curve curve--layer'+data.index} 
        style={{bottom:(data.yOffset || 0)}}
      > 
      <svg
        width={data.width}
        height={
          data.amplitude * 2 +
          data.lineHeight 
        }
      >
        <path d={createPath(data)} />
      </svg>
    </div>
  )
function sineFromX(x,settings){
    return settings.amplitude
    + Math.sin(x / Math.max(settings.frequency||100, settings.width / 1200) 
    + settings.time / (settings.flowSpeed||20)) * settings.amplitude
}
function createPath(data) {
    let points = []
    for (let i = 0; i < data.width; i++) {
      let x= i - (data.skew||0)
      let y = sineFromX(x,data)
      points.push([x,y])
    }
    if (data.half || !data.lineHeight) {
      //draw one curved side and one flat side
      points = [[0, data.amplitude*2+data.lineHeight],[0, 0], ...points, [data.width, 0],[data.width, data.amplitude*2+data.lineHeight]]
    } 
    else {
      //draw 2 curved sides
      points = [
        ...points,
        ...points.map(e => [e[0] + (data.skew||0), e[1] + data.lineHeight]).reverse(),
      ]
    }
    let path = "M" + points.map(p =>`${p[0]},${p[1]}`).join(" L")
    return path
  }