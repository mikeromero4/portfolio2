import React from "react"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import Headroom from "react-headroom"

import Header from "../layout/header"
import "./portfolio.scss"

export default() => (
    <article id = "portfolio-page">
            <section id = "about-section"><About/> </section>
            
<Headroom offset="400" tolerance="27"
pinStart ={300}
>
<Header siteTitle={"my portfolio"} />
</Headroom >
            <section id = "projects-section"> <Projects/></section>
            <section id = "contact-section"><Contact/></section>
    </article>
  )
    