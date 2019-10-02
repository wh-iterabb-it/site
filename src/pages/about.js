import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>about</h1>
    <p>about</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
