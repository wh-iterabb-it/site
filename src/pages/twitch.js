import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageLogo } from "../components/logo"

const BlueStyle = styled.span`
  color: #66cccc;
`

const CLink = styled.a`
  color: #66cccc;
`

const PreStyle = styled.div`
  margin: auto;
  width: 100%;
  font-size: 10px;
  white-space: pre-wrap;
  display: inline-block;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console",
    "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Courier New", monospace, sans-serif;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  color: #ffffff;
  text-shadow: 0 0 2px rgba(100, 100, 100, 0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`
// girlswhocode $104.60 USD
// Receipt Number	10445468
// New York Common Pantry $50.00 USD
// Receipt Number 380087631095842
const TwitchPage = () => (
  <Layout>
    <SEO title="twitch - whiterabbit - katelibby" />
    <PreStyle>
      /== <BlueStyle>Katelibby</BlueStyle>{" "}
      ===============================================================\
      <br />
      | |<br />| We had several iterations of{" "}
      <CLink href="https://github.com/wh-iterabb-it/katelibby">
        Katelibby
      </CLink>{" "}
      over the years. |<br />
      | To better utilize a simple small bot that has been a part of our IRC |
      <br />
      | community for the better part of a decade, we added the functionality |
      <br />
      | to go on twitch, and host a raffle. |<br />
      | We have in efforts of the bot's account generate donations for our
      favorite |<br />
      | causes and impactful community programs, listed below: |<br />
      | |<br />| *{" "}
      <CLink href="https://girlswhocode.com/">girlswhocode.com</CLink> $104.60
      USD |<br />| *{" "}
      <CLink href="https://tiltify.com/@wh-iterabb-it/whiterabbit-campaign-for-cdc-covid-19-emergency-response-fund">
        CDC COVID-19 response fund
      </CLink>{" "}
      ($101/1000.00) USD |<br />| *{" "}
      <CLink href="https://secure3.convio.net/fbnyc/site/Donation2?df_id=9716&9716.donation=form1&mfc_pref=T&commas=yes">
        New York Common Pantry
      </CLink>{" "}
      $50.00 USD |<br />
      | |<br />
      | |<br />
      \=============================================================================/
      <br />
      <br />
    </PreStyle>
  </Layout>
)

export default TwitchPage
