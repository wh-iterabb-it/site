import React from 'react';
import styled from 'styled-components';

const PreStyle = styled.div`
 white-space: pre-wrap;
 display: inline-block;
 font-family: Monaco, monospace;
 letter-spacing: -0.1rem;
 line-height: 1.1 rem;
 text-shadow: 0 0 2px rgba(100,100,100,0.5);
 margin-left: 2 rem;
 margin-top: 2 rem;
 color: #cccc66;
 span {
   color: #cc6666;
 }
`;

const ASCIILogo = () => (
<PreStyle>
███ <span>───────</span> ▄█ ███ <span>────</span> ▄ <span>──</span> ▄█ <span>──────────────────────</span> ███ <span>───</span> ███ <span>────</span> ▄ <span>──</span> ▄█ <br/>
&nbsp;██▄ ██▄ █████ ███     ▀█▀  ▄██   ▄██▀▀██ ███▄█▄  ▄▄ ▄ ███     ███     ▀█▀  ▄██ <br/>
&nbsp;&nbsp;██▄ ██▄ ███  ███ ██  ███ █████ ▄███▄▄▄█ ███ ▀ ▄█████ ███ █▄  ███ █▄  ███ █████<br/>
&nbsp;&nbsp;&nbsp;██▄ ██▄ ▀   ███ ███ ███  ███  ███    ▄ ███   ██▄▄██ ███ ██▀ ███ ██▀ ███  ███ <br/>
&nbsp;&nbsp;&nbsp;██  ███     ███ ███ ███  ███   ▀██▄▄█▀ ███    ▀██▀█ ███ █▀  ███ █▀  ███  ███ <br/>
<span>───────────────────────────</span> ███ <span>───────────────────────────────────────────</span> ███ <br/>
</PreStyle>
)

export default ASCIILogo
