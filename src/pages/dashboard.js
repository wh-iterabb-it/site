import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import API from '../components/dashboard/api';

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

const DashboardPage = () => (
  <Layout>
    <SEO title='about' />
    <PreStyle>
::: <span>DASHBOARD</span> ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::<br/><br/>
    <API apiUrl='https://meowfacts.herokuapp.com/health' name='meowfacts' link='https://github.com/wh-iterabb-it/meowfacts'/><br/>
    <API apiUrl='https://mtastate.herokuapp.com/health' name='mtastate' link='https://github.com/wh-iterabb-it/mtastate'/><br/>
    <API apiUrl='https://meteorology.herokuapp.com/health' name='meteorology' link='https://github.com/wh-iterabb-it/meteorology'/><br/>
    <API apiUrl='https://aphorismcookie.herokuapp.com/health' name='aphorismcookie' link='https://github.com/wh-iterabb-it/aphorismcookie'/><br/>
    </PreStyle>
  </Layout>
)

export default DashboardPage
