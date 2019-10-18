import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/utilities/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>My portfolio</h1>
<ul>
<li id = "about-section">about </li>
<li id = "projects-section"> projects</li>
<li id = "contact-section">contact</li>
</ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
