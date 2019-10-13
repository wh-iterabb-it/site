import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import '../components/layout.css';
import {ASCIILogo1, ASCIILogo2, ASCIILogo4} from '../components/logo';

const BlueStyle = styled.span`
  color: #66CCCC;
`;

const RedStyle = styled.span`
  color: #CC6666;
`;

const GreenStyle = styled.span`
  color: #66CC66;
`;

const YellowStyle = styled.span`
  color: #CCCC66;
`;

const RedAccentStyle = styled.span`
  font-size:20px;
  color: #CC6666;
`;

const LayoutContainerStyle = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #051120;
  position: relative;
  text-align: center;
`;

const LayoutStyle = styled.div`
  margin: auto;
  width: 100%;
  font-size: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const PreStyle = styled.div`
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  font-size: 10px;
  width: 100%;
  margin-top: 2 rem;
  white-space: pre-wrap;
  color: #FFFFFF;
  font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
  letter-spacing: -0.1rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);


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
  <LayoutContainerStyle>
    <LayoutStyle>
      <SEO title='whiterabbit updated 1570683264' />
      <PreStyle>
┌─────────────────────────────────────────────────────────────┐<br/>
:                                                             :<br/>
<ASCIILogo2/><br/>
: ┌─┐     <BlueStyle>august</BlueStyle>                                          ┌─┐ :<br/>
└─│─┘                              <BlueStyle>updated</BlueStyle> 1570683264     └─│─┘<br/>
  │ ··· ────────────────────────────────────────────────────┤<br/>
  │                                                         │<br/>
  ├─╼ <BlueStyle>news</BlueStyle> ╾───────────────────────────────────────── ···   │<br/>
  │                                                         │<br/>
  │  >> <a href='https://www.fsf.org/news/richard-m-stallman-resigns'>Richard M. Stallman resigns</a>                         │<br/>
  │  >> <a href='https://helpx.adobe.com/la/x-productkb/policy-pricing/executive-order-venezuela.html'>Adobe deactivates all Venezuelan accounts</a>           │<br/>
  │  >> <a href='https://www.eff.org/deeplinks/2019/10/open-letter-governments-us-uk-and-australia-facebook-all-out-attack-encryption'>The Open Letter from the Governments of</a>             │<br/>
  │     <a href='https://www.eff.org/deeplinks/2019/10/open-letter-governments-us-uk-and-australia-facebook-all-out-attack-encryption'>US, UK, and Australia to Facebook is</a>                │<br/>
  │     <a href='https://www.eff.org/deeplinks/2019/10/open-letter-governments-us-uk-and-australia-facebook-all-out-attack-encryption'>An All-Out Attack on Encryption</a>                     │<br/>
  │  >> <a href='https://leahneukirchen.org/blog/archive/2019/10/ken-thompson-s-unix-password.html'>39-year-old password of Ken Thompson,</a>               │<br/>
  │     <a href='https://leahneukirchen.org/blog/archive/2019/10/ken-thompson-s-unix-password.html'>co-creator of the UNIX cracked</a>                      │<br/>
  │  >> <a href='https://www.npr.org/sections/health-shots/2019/10/11/769348119/canadas-decision-to-make-public-more-clinical-trial-data-puts-pressure-on-fda'>Canada to make more clinical trial data public</a>      │<br/>
  │  >> <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>Stackexchange updates their Code of Conduct, they</a>   │<br/>
  │     <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>tried to anticipate some of the most common</a>         │<br/>
  │     <a href='https://meta.stackexchange.com/questions/334900/official-faq-on-gender-pronouns-and-code-of-conduct-changes'>questions people may have.</a>                          │<br/>
  │  >> <a href='https://github.com/perl6/problem-solving/pull/89'>Larry Wall approved renaming Perl 6 to Raku</a>         │<br/>
  │  >> <a href='https://www.wsj.com/articles/neumann-expected-to-step-down-as-we-ceo-11569343912?mod=rsswn'>WeWork’s Adam Neumann Steps Down as CEO</a>             │<br/>
  │                                                         │<br/>
  │                                                         │<br/>
  │ ··· ────────────────────────────────────────────────────┤<br/>
  <RedStyle>┌─</RedStyle>│                                                         │<RedStyle>─┐</RedStyle><br/>
  <RedStyle>│</RedStyle> ├─╼ <RedStyle>hong kong</RedStyle> ╾──────────────────────────────────── ···   │ <RedStyle>│</RedStyle><br/>
  <RedStyle>:</RedStyle> :                                                         : <RedStyle>:</RedStyle><br/>
  <RedAccentStyle>Five demands, not one less</RedAccentStyle><br/>
  <RedAccentStyle>五大訴求 缺一不可</RedAccentStyle><br/>
  <RedStyle>:</RedStyle> :                                                         : <RedStyle>:</RedStyle><br/>
  <RedStyle>│</RedStyle> │                                                         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │  >> <a href='https://old.reddit.com/r/worldnews/comments/dbqgb0/protester_shot_in_chest_by_live_police_round/'>Protester shot in chest by live police round during</a> │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │     <a href='https://old.reddit.com/r/worldnews/comments/dbqgb0/protester_shot_in_chest_by_live_police_round/'>Hong Kong National Day protests</a>                     │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │  >> <a href='https://playhearthstone.com/en-us/blog/23179289/'>Blizzard Suspends Professional Hearthstone Player</a>   │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │     <a href='https://playhearthstone.com/en-us/blog/23179289/'>for Hong Kong Comments.</a>                             │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │  >> <a href='https://twitter.com/DylanByers/status/1182133441267003392'>Apple Removes HKmap.live from the App Store</a>         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │  >> <a href='https://blog.emojipedia.org/apple-hides-taiwan-flag-in-hong-kong/'>Apple Hides Taiwan Flag in Hong Kong</a>                │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │  >> <a href='https://www.cnn.com/2019/10/09/business/nba-china-hong-kong-explainer/index.html'>Houston Rockets General Manager Daryl Morey</a>         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │     <a href='https://www.cnn.com/2019/10/09/business/nba-china-hong-kong-explainer/index.html'>voiced his support for Hong Kong's pro-democracy</a>    │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │     <a href='https://www.cnn.com/2019/10/09/business/nba-china-hong-kong-explainer/index.html'>protestors.</a>                                         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │                                                         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │                                                         │ <RedStyle>│</RedStyle><br/>
  <RedStyle>│</RedStyle> │ ··· ────────────────────────────────────────────────────│ <RedStyle>│</RedStyle><br/>
  <RedStyle>└─</RedStyle>│                                                         │<RedStyle>─┘</RedStyle><br/>
  ├─╼ <BlueStyle>crypto</BlueStyle> ╾─────────────────────────────────────── ···   │<br/>
  │                                                         │<br/>
  │  >> <a href='https://www.sec.gov/news/press-release/2019-212'>U.S. Securities and Exchange Commission Halts</a>       │<br/>
  │     <a href='https://www.sec.gov/news/press-release/2019-212'>Alleged $1.7 Billion Unregistered Digital</a>           │<br/>
  │     <a href='https://www.sec.gov/news/press-release/2019-212'>Token Offering</a>                                      │<br/>
  │  >> <a href='https://arstechnica.com/tech-policy/2019/10/visa-mastercard-stripe-and-ebay-all-quit-facebooks-libra-in-one-day/'>Visa, Mastercard, Stripe, and eBay all quit</a>         │<br/>
  │     <a href='https://arstechnica.com/tech-policy/2019/10/visa-mastercard-stripe-and-ebay-all-quit-facebooks-libra-in-one-day/'>Facebook’s Libra in one day</a>                         │<br/>
  │  >> <a href='https://arstechnica.com/tech-policy/2019/08/judge-blasts-intentionally-false-testimony-by-supposed-bitcoin-creator/'>Judge savages self-proclaimed</a>                       │<br/>
  │     <a href='https://arstechnica.com/tech-policy/2019/08/judge-blasts-intentionally-false-testimony-by-supposed-bitcoin-creator/'>bitcoin inventor Craig Wright</a>                       │<br/>
  │  >> <a href='https://www.change.org/p/freerosspetition-we-seek-potus-s-clemency-for-ross-ulbricht-serving-double-life-for-a-website-realdonaldtrump-free-ross'>Petition to free the founder of the Silk Road</a>       │<br/>
  │     <a href='https://www.change.org/p/freerosspetition-we-seek-potus-s-clemency-for-ross-ulbricht-serving-double-life-for-a-website-realdonaldtrump-free-ross'>passes 200,000 signees</a>                              │<br/>
  │                                                         │<br/>
  │                                                         │<br/>
  │ ··· ────────────────────────────────────────────────────┤<br/>
  │                                                         │<br/>
  ├─╼ <BlueStyle>patch notes</BlueStyle> ╾────────────────────────────────── ···   │<br/>
  │                                                         │<br/>
  │  >> <Link to='/password'>We created a new password generator.</Link>                │<br/>
  │                                                         │<br/>
  │                                                         │<br/>
  │ ··· ────────────────────────────────────────────────────┤<br/>
  └────── <Link to='/'>home</Link> | <Link to='/dashboard'>dashboard</Link> | <a href='https://github.com/wh-iterabb-it'>github</a> | <a href='https://twitter.com/wh_iterabb_it'>twitter</a> | <Link to='/about'>about</Link> ──────┘<br/>
      </PreStyle>
    </LayoutStyle>
  </LayoutContainerStyle>
)

export default BlogPage
