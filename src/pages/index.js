import React from "react"
import Portfolio from "../components/portfolio/index"
import Layout from "../components/layout/index"
import SEO from "../components/utilities/seo"
import "../style/main.scss" // Global styles could be included in gatsby-browser.js instead of here if there were more than one page

 
export default () => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio/>
  </Layout>
)
