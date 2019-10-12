import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {ASCIILogo1, ASCIILogo2, ASCIILogo4} from '../components/logo';

const LayoutStyle = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 100%;
  position: relative;
  text-align: center;
`;

const PreStyle = styled.div`
  font-size: 12px;
  display: inline-block;
  margin: auto;
  margin-top: 2 rem;
  white-space: pre-wrap;
  color: #FFFFFF;
  font-family: Monaco, monospace;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);

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
  │  >> <a href='https://www.npr.org/sections/health-shots/2019/10/11/769348119/canadas-decision-to-make-public-more-clinical-trial-data-puts-pressure-on-fda'>Canada to make more clinical trial data public</a>            │<br/>
  │  >> <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>Stackexchange updates their Code of Conduct, they tried</a>   │<br/>
  │     <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>to anticipate some of the most common questions</a>           │<br/>
  │     <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>people may have.</a>                                          │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │  >> <Link to='/password'>we created a new password generator.</Link>                      │<br/>
  │                                                               │<br/>
  │                                                               │<br/>
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
