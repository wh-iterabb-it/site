import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
    <pre>
    ███ ─────── ▄█ ███ ──── ▄ ── ▄█ ────────────────────── ███ ─── ███ ──── ▄ ── ▄█
     ██▄ ██▄ █████ ███     ▀█▀  ▄██   ▄██▀▀██ ███▄█▄ ▄██▄█ ███     ███     ▀█▀  ▄██
      ██▄ ██▄ ███  ███ ██  ███ █████ ▄███▄▄▄█ ███ ▀ ▄█████ ███ █▄  ███ █▄  ███ █████
       ██▄ ██▄ ▀   ███ ███ ███  ███  ███    ▄ ███   ██████ ███ ██▀ ███ ██▀ ███  ███
       ██  ███     ███ ███ ███  ███   ▀██▄▄█▀ ███    ▀██▀█ ███ █▀  ███ █▀  ███  ███
    ──────────────────────────── ███ ─────────────────────────────────────────── ███
    </pre>
    <p>Welcome our website.</p>
    <p>Now to build something great.</p>
    <Link to="/about/">about</Link>
  </Layout>
)

export default IndexPage
