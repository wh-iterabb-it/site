import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {ASCIILogo1, ASCIILogo2, ASCIILogo4} from '../components/logo';

const LayoutStyle = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 40rem;
  position: relative;
  text-align: center;
`;

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

const BlogPage = () => (
  <LayoutStyle>
    <SEO title='whiterabbit updated 1570683264' />
    <PreStyle>
┌───────────────────────────────────────────────────────────────────┐<br/>
:                                                                   :<br/><br/>

<ASCIILogo2/><br/><br/>

: ┌─┐                                                           ┌─┐ :<br/>
└─│─┘                                    <span>updated</span> 1570683264     └─│─┘<br/>
  │ ··· ──────────────────────────────────────────────────────────┤<br/>
  ├─╼ <span>news</span> ╾─────────────────────────────────────────────── ···   │<br/>
  │                                                               │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │                                                               │<br/>
  │ ··· ──────────────────────────────────────────────────────────┤<br/>
  ├─╼ <span>good reads</span> ╾───────────────────────────────────────── ···   │<br/>
  │                                                               │<br/>
  │                        I                                      │<br/>
  │                  D        O              N      T             │<br/>
  │         READ                                                  │<br/>
  │ ··· ──────────────────────────────────────────────────────────┤<br/>
  └───────── <Link to='/'>home</Link> | <Link to='/dashboard'>dashboard</Link> | <a href='https://github.com/wh-iterabb-it'>github</a> | <a href='https://twitter.com/wh_iterabb_it'>twitter</a> | <Link to='/about'>about</Link> ─────────┘<br/>
    </PreStyle>
    </LayoutStyle>
)

export default BlogPage
