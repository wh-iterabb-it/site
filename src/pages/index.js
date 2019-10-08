import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';



const PreStyle = styled.div`
  margin: auto;
  width: 41rem;
  white-space: pre-wrap;
  display: inline-block;
  font-family: Monaco, monospace;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  color: #FFFFFF;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;
  span {
    color: #66CCCC;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <PreStyle>
/== <span>MOTD</span> ======================================================================\<br/>
|                                                                              |<br/>
|        Meme Sites are the best Sites                                         |<br/>
|                                                                              |<br/>
\==============================================================================/<br/><br/>
    </PreStyle>
  </Layout>
)

export default IndexPage
