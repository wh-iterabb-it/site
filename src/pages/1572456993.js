import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import {DefaultAsciiStyle, LayoutContainerStyle, LayoutStyle, MainSpanStyle, PrimeSpanStyle, SecSpanStyle, TriSpanStyle} from '../components/archive';
import {ASCIISkull, ASCIIRocket, ASCIIRocketFrame, Logo} from '../components/archive/art/1572456993';
import styled, { ThemeProvider } from 'styled-components';
import TinyLetter from '../components/tinyletter';

const theme = {
  min_width: '768px',
  max_width: '40rem',
  main_color: '#FFFFFF',
  link_color: '#9EF2F7', // waterspout
  line_height: '0.8rem',
  primary_color: '#F1A66A', //sandy brown
  secondary_color: '#B83000', // mahogany
  trinary_color: '#247BA0', // lapis lazuli
  background: '#282b36' // gunmetal
};

const OverlapStyle = styled.div`
  margin-top: -1rem;
  margin-bottom: -1rem;
  `;

const BlogPage = () => (
<div>
  <ThemeProvider theme={theme}>
    <LayoutContainerStyle>
      <LayoutStyle>
        <SEO title='october - WR ZINE' />
        <DefaultAsciiStyle>
&nbsp;                      ┌──────────────────┐                       <br/>
&nbsp;                      │ ┌── ─ -  - ─ ──┐ │                       <br/>
&nbsp;                      │ │              │ │                       <br/>
&nbsp;                      │       W<SecSpanStyle>|</SecSpanStyle>R        │                       <br/>
&nbsp;                ┌─────┘      ZI<SecSpanStyle>|</SecSpanStyle>NE       └─────┐                 <br/>
&nbsp;                │ ┌── ─                  ─ ──┐ │                 <br/>
&nbsp;                │ │                          │ │                 <br/>
&nbsp;                │         <PrimeSpanStyle>U P D A T E D</PrimeSpanStyle>        │                 <br/>
&nbsp;    ┌───────────┘         <PrimeSpanStyle>O C T O B E R</PrimeSpanStyle>        └───────────┐     <br/>
&nbsp;    │ ┌── ─ -          <PrimeSpanStyle>1 5 7 2 4 5 6 9 9 3</PrimeSpanStyle>         - ─ ──┐ │     <br/>
&nbsp;         │ │                                                  │ │          <br/>
        <OverlapStyle><Logo/></OverlapStyle>
&nbsp;         │ │                                                  │ │          <br/>
&nbsp;         │                                                      │          <br/>
&nbsp;         │    <Link to='/'>home</Link> | <Link to='/dashboard'>dashboard</Link> | <a href='https://github.com/wh-iterabb-it'>github</a> | <a href='https://twitter.com/wh_iterabb_it'>twitter</a> | <Link to='/about'>about</Link>       │          <br/>
&nbsp;         │                                                      │          <br/>
┌─────────┘                                                      └─────────┐<br/>
│ ┌── ─ -                     <SecSpanStyle>N    E    W    S</SecSpanStyle>                     - ─ ──┐ │<br/>
│ │                                                                      │ │<br/>
│                                                                          │<br/>
<OverlapStyle><ASCIIRocketFrame/></OverlapStyle>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.apnews.com/d6a459d8c4774153ad71de95e9effea0' target='_blank'>North Korea conducts under-water missile launch test days before</a>     │<br/>
│     <a href='https://www.apnews.com/d6a459d8c4774153ad71de95e9effea0' target='_blank'>resuming US talks</a>                                                    │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://objective-see.com/blog/blog_0x49.html' target='_blank'>N. Korean Hackers The Infamous Lazarus apt Group’ New MacOS Malware</a>  │<br/>
│     <a href='https://objective-see.com/blog/blog_0x49.html' target='_blank'>Hides Behind Fake Crypto Firm With Its Own Fake Exchange App</a>         |<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.snopes.com/ap/2019/10/15/ahead-of-2020-fb-ensnared-in-heated-political-climate/' target='_blank'>The hashtag deletefacebook is trending on social media after it</a>      │<br/>
│     <a href='https://www.snopes.com/ap/2019/10/15/ahead-of-2020-fb-ensnared-in-heated-political-climate/' target='_blank'>emerged Mark Zuckerberg held informal dinners with conservative</a>      │<br/>
│     <a href='https://www.snopes.com/ap/2019/10/15/ahead-of-2020-fb-ensnared-in-heated-political-climate/' target='_blank'>politicians and commentators in the US.</a>                              │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://arstechnica.com/information-technology/2019/10/us-claims-cyber-strike-on-iran-after-attack-on-saudi-oil-facility/' target='_blank'>US claims cyber strike on Iran after attack on Saudi oil facility</a>    │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.us-cert.gov/ncas/current-activity/2019/10/21/nsa-and-ncsc-release-joint-advisory-turla-group-activity' target='_blank'>Russian hacker group hacks Iranian hacker group</a>                      │<br/>
│     <a href='https://www.us-cert.gov/ncas/current-activity/2019/10/21/nsa-and-ncsc-release-joint-advisory-turla-group-activity' target='_blank'>to use their resources to hack the US and UK</a>                         │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.nytimes.com/2019/10/25/technology/dod-jedi-contract.html' target='_blank'>Microsoft Wins Pentagon’s $10B Military Contract</a>                     │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.buzzfeednews.com/article/ryanmac/facebook-warren-biden-trump-ads-take-down-profanity' target='_blank'>Facebook Said Politicians Can Lie In Ads. Its Taking Down Ads</a>        │<br/>
│     <a href='https://www.buzzfeednews.com/article/ryanmac/facebook-warren-biden-trump-ads-take-down-profanity' target='_blank'>From Warren, Biden, And Trump For Other Reasons.</a>                     │<br/>
│                                                                          │<br/>
│                                                                          │<br/>
│                                                                          │<br/>
│ │                                                                      │ │<br/>
│ └── ─ -                                                          - ─ ──┘ │<br/>
└─────────┐                                                      ┌─────────┘<br/>
&nbsp;         │                                                      │          <br/>
┌─────────┘                                                      └─────────┐<br/>
│ ┌── ─ -              <SecSpanStyle>N  E  A  T         H  A  C  K  S</SecSpanStyle>            - ─ ──┐ │<br/>
│ │                                                                      │ │<br/>
<OverlapStyle><ASCIISkull/></OverlapStyle>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://www.evilsocket.net/2019/10/19/Weaponizing-and-Gamifying-AI-for-WiFi-Hacking-Presenting-Pwnagotchi-1-0-0/' target='_blank'>Weaponizing and Gamifying AI for WIFI Hacking:</a>                       │<br/>
│     <a href='https://www.evilsocket.net/2019/10/19/Weaponizing-and-Gamifying-AI-for-WiFi-Hacking-Presenting-Pwnagotchi-1-0-0/' target='_blank'>Presenting PWNAGOTCHI 1.0.0</a>                                          │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://googleprojectzero.blogspot.com/2019/08/a-very-deep-dive-into-ios-exploit.html' target='_blank'>A very deep dive into iOS Exploit chains found in the wild</a>           │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://krebsonsecurity.com/2019/10/avast-nordvpn-breaches-tied-to-phantom-user-accounts/' target='_blank'>Avast and NordVPN confirms it was hacked,</a>                            │<br/>
│     <a href='https://krebsonsecurity.com/2019/10/avast-nordvpn-breaches-tied-to-phantom-user-accounts/' target='_blank'>Breaches Tied to Phantom User Accounts</a>                               │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://github.com/Anon-Exploiter/SUID3NUM' target='_blank'>Python script to assist in finding SUID binaries more effectively</a>    │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://habr.com/en/company/dsec/blog/472762/' target='_blank'>Technical analysis of the checkm8 exploit</a>                            │<br/>
│                                                                          │<br/>
│                                                                          │<br/>
│ │                                                                      │ │<br/>
│ └── ─ -                                                          - ─ ──┘ │<br/>
└─────────┐                                                      ┌─────────┘<br/>
&nbsp;         │                                                      │          <br/>
┌─────────┘                                                      └─────────┐<br/>
│ ┌── ─ -           <SecSpanStyle>P   A   T   C   H   N   O   T   E   S</SecSpanStyle>          - ─ ──┐ │<br/>
│ │                                                                      │ │<br/>
│                                                                          │<br/>
│                                                                          │<br/>
│  <PrimeSpanStyle>>></PrimeSpanStyle> <a href='https://tinyletter.com/wh-iterabb-it/'>We added a new Email Newsletter, Sign up to get monthly updates</a>      │<br/>
│                                                                          │<br/>
│                                                                          │<br/>
│ │                                                                      │ │<br/>
│ └── ─ -                                                          - ─ ──┘ │<br/>
└──────────────────────────────────────────────────────────────────────────┘<br/>
        <br/>
        <br/>
        </DefaultAsciiStyle>
      </LayoutStyle>
    </LayoutContainerStyle>
  </ThemeProvider>
</div>
);


export default BlogPage
