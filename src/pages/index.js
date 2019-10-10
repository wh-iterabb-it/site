import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {ASCIILogo1, ASCIILogo2, ASCIILogo4} from '../components/logo';

const PreStyle = styled.div`
  margin: auto;
  width: 40rem;
  white-space: pre-wrap;
  display: inline-block;
  font-family: Monaco, monospace;
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
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <PreStyle>

    <Link to='/1570683264'>1570683264</Link>
    </PreStyle>
  </Layout>
)

export default IndexPage
