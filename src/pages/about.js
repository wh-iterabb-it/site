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

  </Layout>
)

export default AboutPage
