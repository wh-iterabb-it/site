import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {ASCIILogo} from './logo';

const HeaderContainerStyle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const HeaderStyle = styled.div`
  margin: auto;
  width: 41rem;

  a {
    text-decoration: none;
    color: #66cc66;
  }

  nav {
    margin: auto;
    font-family: 'TopazPlus', 'Lucida Console', Monaco, monospace;
    line-height: 1.1 rem;
    text-shadow: 0 0 2px rgba(100,100,100,0.5);
  }
`;

const LogoStyle = styled.div`
`;

const NavStyle = styled.nav`
  width: 41rem;
  overflow: hidden;

  .active {
    text-decoration: underlind;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 0.85rem;
    span {
      color: #eff6ee;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainerStyle>
    <HeaderStyle>
      <LogoStyle><ASCIILogo/></LogoStyle>
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
