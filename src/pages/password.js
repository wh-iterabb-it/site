import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import PasswordLayout from '../components/password/';

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

const PasswordPage = () => (
  <Layout>
    <SEO title='password generator' />
    <PreStyle>
::: <span>PASSWORD GENERATOR</span> :::::::::::::::::::::::::::::::::::::::::::::::::::::::::<br/><br/>

    <PasswordLayout/>
    </PreStyle>
  </Layout>
)

export default PasswordPage
