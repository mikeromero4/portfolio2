import React from "react"

<<<<<<< HEAD
import Layout from "../components/layout"
import SEO from "../components/seo"
=======
import Layout from "../components/layout/index"
import SEO from "../components/utilities/seo"
>>>>>>> origin/animated-header

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
