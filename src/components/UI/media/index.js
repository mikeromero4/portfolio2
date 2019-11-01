import React from "react"
import "./style.scss"

export default  ({image,children})=><div className="o-media">
<a target="_blank" href={image.link}>
  <img
    class="o-media__image"
    width={image.width}
    src={image.source}
    alt={image.description}
  />
</a>
<div class="o-media__body">
  {children}
</div>
</div>

