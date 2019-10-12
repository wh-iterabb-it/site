import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';


const PreStyle = styled.div`
  font-size: 11px;
  margin: auto;
  width: 100%;
  white-space: pre-wrap;
  display: inline-block;
  font-family: 'FreeMono', Monaco, monospace;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  color: #FFFFFF;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;
  span {
    color: #66CCCC;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const PasswordPage = () => (
  <Layout>
    <SEO title='password generator' />
    <PreStyle>
::: <span>PASSWORD GENERATOR</span> :::::::::::::::::::::::::::::::::::::::::::::::::::::::::<br/><br/>
I disabled it for right now...
    </PreStyle>
  </Layout>
)

export default PasswordPage
