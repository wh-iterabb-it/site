import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <pre>
              .          .               .    .         .
              |       o _|_              |    |      o _|_
    .  .    ._|--.    .  |  .-. .--..-.  |.-. |.-.   .  |
     \  \  /  |  |    |  | (.-' |  (   ) |   )|   )  |  |
      `' `'   '  `-o-' `-`-'`--''   `-'`-'`-' '`-'o-' `-`-'
    </pre>
    <p>Welcome our website.</p>
    <p>Now to build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">about</Link>
  </Layout>
)

export default IndexPage
