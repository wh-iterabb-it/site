import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <center>
      <SEO title="Home" />
      <p>Welcome our website.</p>
      <p>Now to build something great.</p>
      <Link to="/about/">about</Link>
    </center>
  </Layout>
)

export default IndexPage
