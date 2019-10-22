import React from 'react';
import styled from 'styled-components';

const RedStyle = styled.span`
  color: #cc6666;
`;

const BlueStyle = styled.span`
  color: #66CCCC;
`;
const YellowStyle = styled.span`
  color: #cccc66;

`;

const PreStyle = styled.div`
  font-size: 10px;
  width: 100%;
  white-space: pre-wrap;
  display: inline-block;
  font-family: 'Source Code Pro', Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, sans-serif;
  letter-spacing: -0.115rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;
  color: #cccc66;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const ASCIILogo1 = () => (
<PreStyle>
                                                                     <br/>
███ <RedStyle>───────</RedStyle> ▄█ ███ <RedStyle>────</RedStyle> ▄ <RedStyle>──</RedStyle> ▄█ <RedStyle>──────────────────────</RedStyle> ███ <RedStyle>───</RedStyle> ███ <RedStyle>────</RedStyle> ▄ <RedStyle>──</RedStyle> ▄█  <br/>
&nbsp;██▄ ██▄ █████ ███     ▀█▀  ▄██   ▄██▀▀██ ███▄█▄  ▄▄ ▄ ███     ███     ▀█▀  ▄██  <br/>
&nbsp;&nbsp;██▄ ██▄ ███  ███ ██  ███ █████ ▄███▄▄▄█ ███ ▀ ▄█████ ███ █▄  ███ █▄  ███ █████ <br/>
&nbsp;&nbsp;&nbsp;██▄ ██▄ ▀   ███ ███ ███  ███  ███    ▄ ███   ██▄▄██ ███ ██▀ ███ ██▀ ███  ███  <br/>
&nbsp;&nbsp;&nbsp;██  ███     ███ ███ ███  ███   ▀██▄▄█▀ ███    ▀██▀█ ███ █▀  ███ █▀  ███  ███  <br/>
<RedStyle>───────────────────────────</RedStyle> ███ <RedStyle>──────────────────────────────────────────</RedStyle>  ███  <br/>
</PreStyle>
);

const ASCIILogo5= () => (
<PreStyle>
                                                                     <br/>
███&nbsp;<RedStyle>───────</RedStyle>&nbsp;▄█&nbsp;███&nbsp;<RedStyle>────</RedStyle>&nbsp;▄&nbsp;<RedStyle>──</RedStyle>&nbsp;▄█&nbsp;<RedStyle>──────────────────────</RedStyle>&nbsp;███&nbsp;<RedStyle>───</RedStyle>&nbsp;███&nbsp;<RedStyle>────</RedStyle>&nbsp;▄&nbsp;<RedStyle>──</RedStyle>&nbsp;▄█&nbsp;<br/>
&nbsp;██▄&nbsp;██▄&nbsp;█████&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▀█▀&nbsp;&nbsp;▄██&nbsp;&nbsp;&nbsp;▄██▀▀██&nbsp;███▄█▄&nbsp;&nbsp;▄▄&nbsp;▄&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▀█▀&nbsp;&nbsp;▄██&nbsp;<br/>
&nbsp;&nbsp;██▄&nbsp;██▄&nbsp;███&nbsp;&nbsp;███&nbsp;██&nbsp;&nbsp;███&nbsp;█████&nbsp;▄███▄▄▄█&nbsp;███&nbsp;▀&nbsp;▄█████&nbsp;███&nbsp;█▄&nbsp;&nbsp;███&nbsp;█▄&nbsp;&nbsp;███&nbsp;█████<br/>
&nbsp;&nbsp;&nbsp;██▄&nbsp;██▄&nbsp;▀&nbsp;&nbsp;&nbsp;███&nbsp;███&nbsp;███&nbsp;&nbsp;███&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;▄&nbsp;███&nbsp;&nbsp;&nbsp;██▄▄██&nbsp;███&nbsp;██▀&nbsp;███&nbsp;██▀&nbsp;███&nbsp;&nbsp;███&nbsp;<br/>
&nbsp;&nbsp;&nbsp;██&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███&nbsp;███&nbsp;███&nbsp;&nbsp;███&nbsp;&nbsp;&nbsp;▀██▄▄█▀&nbsp;███&nbsp;&nbsp;&nbsp;&nbsp;▀██▀█&nbsp;███&nbsp;█▀&nbsp;&nbsp;███&nbsp;█▀&nbsp;&nbsp;███&nbsp;&nbsp;███&nbsp;<br/>
<RedStyle>───────────────────────────</RedStyle>&nbsp;███&nbsp;<RedStyle>──────────────────────────────────────────</RedStyle>&nbsp;&nbsp;███&nbsp;<br/>
</PreStyle>
);

const ASCIILogo2 = () => (
<PreStyle>
                                                                     <br/>
██<RedStyle>╗</RedStyle>    ██<RedStyle>╗</RedStyle>██<RedStyle>╗</RedStyle>  ██<RedStyle>╗</RedStyle>██<RedStyle>╗</RedStyle>████████<RedStyle>╗</RedStyle>███████<RedStyle>╗</RedStyle>██████<RedStyle>╗</RedStyle>  █████<RedStyle>╗</RedStyle> ██████<RedStyle>╗</RedStyle> ██████<RedStyle>╗</RedStyle> ██<RedStyle>╗</RedStyle>████████<RedStyle>╗</RedStyle><br/>
██<RedStyle>║</RedStyle>    ██<RedStyle>║</RedStyle>██<RedStyle>║</RedStyle>  ██<RedStyle>║</RedStyle>██<RedStyle>║╚══</RedStyle>██<RedStyle>╔══╝</RedStyle>██<RedStyle>╔════╝</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>║╚══</RedStyle>██<RedStyle>╔══╝</RedStyle><br/>
██<RedStyle>║</RedStyle> █<RedStyle>╗</RedStyle> ██<RedStyle>║</RedStyle>███████<RedStyle>║</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   █████<RedStyle>╗</RedStyle>  ██████<RedStyle>╔╝</RedStyle>███████<RedStyle>║</RedStyle>██████<RedStyle>╔╝</RedStyle>██████<RedStyle>╔╝</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   <br/>
██<RedStyle>║</RedStyle>███<RedStyle>╗</RedStyle>██<RedStyle>║</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>║</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   ██<RedStyle>╔══╝</RedStyle>  ██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>║</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>╔══</RedStyle>██<RedStyle>╗</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   <br/>
<RedStyle>╚</RedStyle>███<RedStyle>╔</RedStyle>███<RedStyle>╔╝</RedStyle>██<RedStyle>║</RedStyle>  ██<RedStyle>║</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   ███████<RedStyle>╗</RedStyle>██<RedStyle>║</RedStyle>  ██<RedStyle>║</RedStyle>██<RedStyle>║</RedStyle>  ██<RedStyle>║</RedStyle>██████<RedStyle>╔╝</RedStyle>██████<RedStyle>╔╝</RedStyle>██<RedStyle>║</RedStyle>   ██<RedStyle>║</RedStyle>   <br/>
<RedStyle> ╚══╝╚══╝</RedStyle> <RedStyle>╚═╝</RedStyle>  <RedStyle>╚═╝╚═╝</RedStyle>   <RedStyle>╚═╝</RedStyle>   <RedStyle>╚══════╝╚═╝</RedStyle>  <RedStyle>╚═╝╚═╝</RedStyle>  <RedStyle>╚═╝╚═════╝</RedStyle> <RedStyle>╚═════╝</RedStyle> <RedStyle>╚═╝</RedStyle>   <RedStyle>╚═╝</RedStyle>   <br/>
</PreStyle>
);

const ASCIILogo3 = () => (
<PreStyle>
██╗    ██╗██╗  ██╗██╗████████╗███████╗██████╗  █████╗ ██████╗ ██████╗ ██╗████████╗<br/>
██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║╚══██╔══╝<br/>
██║ █╗ ██║███████║██║   ██║   █████╗  ██████╔╝███████║██████╔╝██████╔╝██║   ██║   <br/>
██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██╔══██╗██╔══██║██╔══██╗██╔══██╗██║   ██║   <br/>
╚███╔███╔╝██║  ██║██║   ██║   ███████╗██║  ██║██║  ██║██████╔╝██████╔╝██║   ██║   <br/>
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═════╝ ╚═╝   ╚═╝   <br/>
</PreStyle>
);

const ASCIILogo4 = () => (
<PreStyle>
         ___ .___.__  .___ _____._._______.______  .______  ._______ ._______ .___ _____._
.___    |   |:   |  \ : __|\__ _:|: .____/: __   \ :      \ : __   / : __   / : __|\__ _:|
:   | /\|   ||   :   || : |  |  :|| : _/\ |  \____||   .   ||  |D  \ |  |D  \ | : |  |  :|
|   |/  :   ||   .   ||   |  |   ||   /  \|   :  \ |   :   ||  |D   \|  |D   \|   |  |   |
|   /       ||___|   ||   |  |   ||_.: __/|   |___\|___|   ||_______/|_______/|   |  |   |
|______/|___|    |___||___|  |___|   :/   |___|        |___|                  |___|  |___|
</PreStyle>
);

export  {ASCIILogo1, ASCIILogo2, ASCIILogo3, ASCIILogo4}
