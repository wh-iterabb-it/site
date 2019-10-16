import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {ASCIILogo1} from './logo';

const HeaderContainerStyle = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
`;

const HeaderStyle = styled.div`

  width: 100%;

  a {
    text-decoration: none;
    color: #66cc66;
  }

  nav {
    margin: auto;
    font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
    line-height: 1.1 rem;
    text-shadow: 0 0 2px rgba(100,100,100,0.5);
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const LogoStyle = styled.div`
`;

const NavStyle = styled.nav`
  width: 100%;
  font-size: 10px;
  margin: auto;

  overflow: hidden;

  .active {
    text-decoration: underline;
  }

  ul {
    margin: 0;
    margin-top:1rem;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 0.3rem;
    display:inline;
    span {
      color: #eff6ee;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
    li {
      padding: 0.85rem;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainerStyle>
    <HeaderStyle>
      <br/>
      <LogoStyle><ASCIILogo1/></LogoStyle>
      <NavStyle>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><span>|</span></li>
          <li><Link to='/dashboard'>dashboard</Link></li>
          <li><span>|</span></li>
          <li><a href='https://github.com/wh-iterabb-it'>github</a></li>
          <li><span>|</span></li>
          <li><a href='https://twitter.com/wh_iterabb_it'>twitter</a></li>
          <li><span>|</span></li>
          <li><Link to='/about'>about</Link></li>
        </ul>
      </NavStyle>
    </HeaderStyle>
  </HeaderContainerStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
