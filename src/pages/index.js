import React from "react"
<<<<<<< HEAD
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
=======
import Intro from "../components/sections/intro/index"
import About from "../components/sections/about/index"
import Projects from "../components/sections/projects/index"
import Contact from "../components/sections/contact/index"
import Layout from "../components/layout/index"
import SEO from "../components/utilities/seo"
import "../style/main.scss" // Global styles could be included in gatsby-browser.js instead of here if there were multiple pages

 
export default () => <>
  <SEO title="Portfolio" />
  <Layout Intro={Intro}>
    <article id = "portfolio-page">
      <section id = "about-section"><About/> </section>
      <section id = "projects-section"> <Projects/></section>
      <section id = "contact-section"><Contact/></section>
    </article>
  </Layout>
</>
>>>>>>> origin/animated-header
