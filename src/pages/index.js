import React from "react"
import Intro from "../components/sections/intro"
import About from "../components/sections/about"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import Layout from "../components/layout/index"
import SEO from "../components/utilities/seo"
import "../style/main.scss" // Global styles could be included in gatsby-browser.js instead of here if there were multiple pages

 
export default () => (
  <Layout>
    <SEO title="Portfolio" />
    <article id = "portfolio-page">
      <Intro/>
      <section id = "about-section"><About/> </section>
      <section id = "projects-section"> <Projects/></section>
      <section id = "contact-section"><Contact/></section>
    </article>
  </Layout>
)