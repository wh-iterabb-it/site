import React from 'react';
import styled from 'styled-components';

const PreStyle = styled.div`
  font-size: 11px;
  width: 100%;
  white-space: pre-wrap;
  display: inline-block;
  font-family: Monaco, monospace;
  letter-spacing: -0.115rem;
  line-height: 1.1 rem;
  text-shadow: 0 0 2px rgba(100,100,100,0.5);
  margin-left: 2 rem;
  margin-top: 2 rem;
  color: #cccc66;
  span {
   color: #cc6666;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 40rem;
  }
`;

const ASCIILogo1 = () => (
<PreStyle>
███ <span>───────</span> ▄█ ███ <span>────</span> ▄ <span>──</span> ▄█ <span>──────────────────────</span> ███ <span>───</span> ███ <span>────</span> ▄ <span>──</span> ▄█ <br/>
&nbsp;██▄ ██▄ █████ ███     ▀█▀  ▄██   ▄██▀▀██ ███▄█▄  ▄▄ ▄ ███     ███     ▀█▀  ▄██ <br/>
&nbsp;&nbsp;██▄ ██▄ ███  ███ ██  ███ █████ ▄███▄▄▄█ ███ ▀ ▄█████ ███ █▄  ███ █▄  ███ █████<br/>
&nbsp;&nbsp;&nbsp;██▄ ██▄ ▀   ███ ███ ███  ███  ███    ▄ ███   ██▄▄██ ███ ██▀ ███ ██▀ ███  ███ <br/>
&nbsp;&nbsp;&nbsp;██  ███     ███ ███ ███  ███   ▀██▄▄█▀ ███    ▀██▀█ ███ █▀  ███ █▀  ███  ███ <br/>
<span>───────────────────────────</span> ███ <span>───────────────────────────────────────────</span> ███ <br/>
</PreStyle>
);

const ASCIILogo2 = () => (
<PreStyle>
██<span>╗</span>    ██<span>╗</span>██<span>╗</span>  ██<span>╗</span>██<span>╗</span>████████<span>╗</span>███████<span>╗</span>██████<span>╗</span>  █████<span>╗</span> ██████<span>╗</span> ██████<span>╗</span> ██<span>╗</span>████████<span>╗</span><br/>
██<span>║</span>    ██<span>║</span>██<span>║</span>  ██<span>║</span>██<span>║╚══</span>██<span>╔══╝</span>██<span>╔════╝</span>██<span>╔══</span>██<span>╗</span>██<span>╔══</span>██<span>╗</span>██<span>╔══</span>██<span>╗</span>██<span>╔══</span>██<span>╗</span>██<span>║╚══</span>██<span>╔══╝</span><br/>
██<span>║</span> █<span>╗</span> ██<span>║</span>███████<span>║</span>██<span>║</span>   ██<span>║</span>   █████<span>╗</span>  ██████<span>╔╝</span>███████<span>║</span>██████<span>╔╝</span>██████<span>╔╝</span>██<span>║</span>   ██<span>║</span>   <br/>
██<span>║</span>███<span>╗</span>██<span>║</span>██<span>╔══</span>██<span>║</span>██<span>║</span>   ██<span>║</span>   ██<span>╔══╝</span>  ██<span>╔══</span>██<span>╗</span>██<span>╔══</span>██<span>║</span>██<span>╔══</span>██<span>╗</span>██<span>╔══</span>██<span>╗</span>██<span>║</span>   ██<span>║</span>   <br/>
<span>╚</span>███<span>╔</span>███<span>╔╝</span>██<span>║</span>  ██<span>║</span>██<span>║</span>   ██<span>║</span>   ███████<span>╗</span>██<span>║</span>  ██<span>║</span>██<span>║</span>  ██<span>║</span>██████<span>╔╝</span>██████<span>╔╝</span>██<span>║</span>   ██<span>║</span>   <br/>
<span> ╚══╝╚══╝</span> <span>╚═╝</span>  <span>╚═╝╚═╝</span>   <span>╚═╝</span>   <span>╚══════╝╚═╝</span>  <span>╚═╝╚═╝</span>  <span>╚═╝╚═════╝</span> <span>╚═════╝</span> <span>╚═╝</span>   <span>╚═╝</span>   <br/>
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
:   | /\|   ||   :   || : |  |  :|| : _/\ |  \____||   .   ||  |>  \ |  |>  \ | : |  |  :|
|   |/  :   ||   .   ||   |  |   ||   /  \|   :  \ |   :   ||  |>   \|  |>   \|   |  |   |
|   /       ||___|   ||   |  |   ||_.: __/|   |___\|___|   ||_______/|_______/|   |  |   |
|______/|___|    |___||___|  |___|   :/   |___|        |___|                  |___|  |___|
:
:
</PreStyle>
);

export  {ASCIILogo1, ASCIILogo2, ASCIILogo3, ASCIILogo4}
