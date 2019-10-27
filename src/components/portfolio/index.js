import React from "react"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"


export default() => (
    <article id = "portfolio-page">
    
            <section id = "about-section"><About/> </section>
            

            <section id = "projects-section"> <Projects/></section>
            <section id = "contact-section"><Contact/></section>
    </article>
  )
    