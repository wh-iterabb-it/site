import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {ASCIILogo1} from './logo';

const HeaderContainerStyle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1rem;
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
    font-family: 'FreeMono', 'Ubuntu Mono', Monaco, monospace;
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
      <LogoStyle><ASCIILogo1/></LogoStyle>
      <NavStyle>
        <ul>
          <li><span>|</span></li>
          <li><Link to='/'>Home</Link></li>
          <li><span>|</span></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><span>|</span></li>
          <li><a href='https://github.com/wh-iterabb-it'>Github</a></li>
          <li><span>|</span></li>
          <li><a href='https://twitter.com/wh_iterabb_it'>Twitter</a></li>
          <li><span>|</span></li>
          <li><Link to='/about'>About</Link></li>
          <li><span>|</span></li>
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
