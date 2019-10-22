import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {ASCIILogo1, ASCIILogo2, ASCIILogo4} from '../components/logo';

const PreStyle = styled.div`
  margin: auto;
  font-size: 10px;
  width: 100%;
  white-space: pre-wrap;
  display: inline-block;
  font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  color: #FFFFFF;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-top: 2 rem;
  span {
    color: #66CCCC;
  }

  a {
    text-decoration: none;
    color: #66cc66;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const LogoStyle = styled.span`
  color: #FFFFFF;
`;

const StripeStyle = styled.span`
  color: #B83000;
`;


const IndexPage = () => (
  <Layout>
    <SEO title='home - whiterabbit' />
    <PreStyle>
      <br/>
      <br/>
      W<StripeStyle>|</StripeStyle>R<br/>
      ZI<StripeStyle>|</StripeStyle>NE<br/><br/>
      <br/>
      <br/>
      <Link to='/1570683264'>August 2019</Link><br/>
    </PreStyle>
  </Layout>
)

//       <!--Link to='/1571242602'>October 2019</Link><br/>

export default IndexPage
