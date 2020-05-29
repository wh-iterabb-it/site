import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {ImageLogo} from '../components/logo';

const BlueStyle = styled.span`
  color: #66CCCC;
`;

const PreStyle = styled.div`
  margin: auto;
  width: 100%;
  font-size: 10px;
  white-space: pre-wrap;
  display: inline-block;
  font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  color: #FFFFFF;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title='about - whiterabbit' />
    <PreStyle>
/== <BlueStyle>ABOUT US</BlueStyle> =================================================================\<br/>
|                                                                             |<br/>
| Contributors to Whiterabbit come from many different backgrounds in the     |<br/>
| fields of infosec, pentesting, data engineering, game development,          |<br/>
| hardware, and other human professions. We share a singular goal. . .        |<br/>
| To strive to connect talented, passionate people in order to share          |<br/>
| information, and contribute to the world around us.                         |<br/>
|                                                                             |<br/>
\=============================================================================/<br/><br/>
    </PreStyle>
    <p><br/></p>
    <PreStyle>
/== <BlueStyle>COVID-19</BlueStyle> =================================================================\<br/>
|                                                                             |<br/>
| Our Organization, wh.iterabb.it being centered in the heart of Manhattan NYC|<br/>
| is fortunate enough to be safe during these times, but there are many who   |<br/>
| still need help. In a state of emergency, it takes a world —ALL OF US—      |<br/>
| to combat coronavirus.                                                      |<br/>
| We made a committment to generate 1,000$ to the CDC Foundation's            |<br/>
| coronavirus (COVID-19) emergency response fund, which deploys emergency     |<br/>
| staffing to public health agencies, funds medical supplies, increases       |<br/>
| lab capacity, provides support to vulnerable communities, and much more.    |<br/>
| To learn more or make a donation go to:                                     |<br/>
| <a href='https://tiltify.com/@wh-iterabb-it/whiterabbit-campaign-for-cdc-covid-19-emergency-response-fund'> Our CDC Tiltify Page </a>                                     |<br/>
|                                                                             |<br/>
\=============================================================================/<br/><br/>
    </PreStyle>

  </Layout>
)

export default AboutPage
