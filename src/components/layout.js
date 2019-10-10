/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const LayoutContainerStyle = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #051120;
  position: relative;
  text-align: center;
`;

const LayoutStyle = styled.div`

  margin: auto;
  width: 43rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutContainerStyle>
      <LayoutStyle>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>

      </LayoutStyle>
    </LayoutContainerStyle>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
