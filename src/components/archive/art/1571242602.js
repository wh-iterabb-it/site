import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {DefaultAsciiStyle, LayoutContainerStyle, LayoutStyle, MainSpanStyle, PrimeSpanStyle, SecSpanStyle, TriSpanStyle} from '../';

const theme = {
  min_width: '768px',
  max_width: '40rem',
  main_color: '#FFFFFF',
  link_color: '#9ef2f7', // blue
  line_height: '0.8rem',
  primary_color: '#f1a66a', // yellow
  secondary_color: '#B83000', // blue
  trinary_color: '#1d2028', // red
  background: '#282b36'
};

const Logo = () => (
<div>
  <ThemeProvider theme={theme}>
    <DefaultAsciiStyle>
&nbsp;   ░░░░░     ░░░░░ ░░░░░ ░░░░░ ░░░░░ ░░░░░░░░░░░░░░░ ░░░░░░░░░░░   <br/>
&nbsp;   ░█████    ░█████░█████░█████░█████░███████████████░███████████  <br/>
&nbsp;   ░█████    ░█████░█████░█████░█████░███████████████░███████████  <br/>
&nbsp;   ░█████    ░█████░█████░█████░█████ ███████████████░███████████  <br/>
&nbsp;   ░█████    ░█████░███████████░█████     ░█████     ░█████        <br/>
&nbsp;   ░█████ ░  ░█████░█████░█████░█████     ░█████     ░█████░░      <br/>
&nbsp;   ░█████░░█ ░█████░█████░█████░█████     ░█████     ░████████     <br/>
&nbsp;   ░█████░███░█████░█████░█████░█████     ░█████     ░█████░░░░░   <br/>
&nbsp;   ░███████░███████░█████░█████░█████     ░█████     ░███████████  <br/>
&nbsp;    ▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒      ▒▒▒▒▒      ▒▒▒▒▒▒▒▒▒▒▒  <br/>
 <br/>
&nbsp;   ░░░░░░░░░░░ ░░░░░░░░░░░ ░░░░░░░░░░░ ░░░░░░░░░░░ ░░░░░ ░░░░░░░░░░░░░░░  <br/>
&nbsp;   ░██████████ ░███████████░███████████░███████████░█████░███████████████ <br/>
&nbsp;   ░█████░█████░█████░█████░███████████░███████████░█████░███████████████ <br/>
&nbsp;   ░█████░█████░█████░█████░█████░█████░█████░█████░█████░███████████████ <br/>
&nbsp;   ░██████████ ░███████████░█████░█████░█████░█████░█████     ░█████      <br/>
&nbsp;   ░█████░█████░█████░█████░███████████░███████████░█████     ░█████      <br/>
&nbsp;   ░█████░█████░█████░█████░█████░█████░█████░█████░█████     ░█████      <br/>
&nbsp;   ░█████░█████░█████░█████░█████░█████░█████░█████░█████     ░█████      <br/>
&nbsp;   ░█████░█████░█████░█████░██████████ ░██████████ ░█████     ░█████      <br/>
&nbsp;    ▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒ ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒      ▒▒▒▒▒      <br/>
</DefaultAsciiStyle>
</ThemeProvider>
</div>
);

const ASCIIRocketFrame = () => (
<div>
  <ThemeProvider theme={theme}>
    <DefaultAsciiStyle>
│                                                                          │<br/>
│                                                 ,:                       │<br/>
│                                               ,' |                       │<br/>
│                                              /   :                       │<br/>
│                                           --'   /                       │<br/>
│                                           |/  /:/                        │<br/>
│                                           / :|/_|                        │<br/>
│                                        __/   /                           │<br/>
│                                        )'-. /                            │<br/>
│                                        ./  :\                            │<br/>
│                                         /.' '                            │<br/>
│                                       '/'                                │<br/>
│                                       +                                  │<br/>
│                                      '                                   │<br/>
│                                    '.                                    │<br/>
│                                .-"-                                      │<br/>
│                               (    |                                     │<br/>
│                            . .-'  '.                                     │<br/>
│                           ( (.   )&:                                     │<br/>
│                       .'    / (_  )                                      │<br/>
│                        _. :(.   )&3  '                                   │<br/>
│                    .  (  '-' (  '.   .                                   │<br/>
│                     .  :  (   .0&0)                                      │<br/>
│                    /_'( "0 '0. )"'                                       │<br/>
│                (  (/  .  ' )=='                                          │<br/>
│               (   (    )  .&"   +                                        │<br/>
│                 (''&0.( _(   (                                           │<br/>
│              ..-. '&3    ) '  )  +                                       │<br/>
│            -'   (      -0b:  )                                           │<br/>
│          '    _  '    (&3"Y0                                             │<br/>
│        _(    (    )b  -'.  ) +                                           │<br/>
│       ( &)  ( _.03" _0   \( \   *                                        │<br/>
│          +  )/    (&3   (&&   |`-:_    )  )                              │<br/>
│      ,----....____   (0:f     |    `+.                                   │<br/>
│     (             ````----....|___   |        |🇰🇵                        │<br/>
│      \     _                        ````----..|.____                     │<br/>
│       \    _)                                       ```---.._            │<br/>
│        \                                                     \           │<br/>
│      )`.\  )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`.     │<br/>
│    -'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `    │<br/>
│              <b><SecSpanStyle>우 리 는     빈    단 어 를     말 하 지     않 는 다</SecSpanStyle></b>            │<br/>
    </DefaultAsciiStyle>
  </ThemeProvider>
</div>
);

const ASCIIRocket = () => (
<div>
  <ThemeProvider theme={theme}>
    <DefaultAsciiStyle>
&nbsp;                                             ,:    <br/>
&nbsp;                                           ,' |    <br/>
&nbsp;                                          /   :    <br/>
&nbsp;                                       --'   /     <br/>
&nbsp;                                       |/  /:/     <br/>
&nbsp;                                       / :|/_|     <br/>
&nbsp;                                    __/   /        <br/>
&nbsp;                                    )'-. /         <br/>
&nbsp;                                    ./  :\         <br/>
&nbsp;                                     /.' '         <br/>
&nbsp;                                   '/'             <br/>
&nbsp;                                   +               <br/>
&nbsp;                                  '                <br/>
&nbsp;                                '.                 <br/>
&nbsp;                            .-"-                   <br/>
&nbsp;                           (    |                  <br/>
&nbsp;                        . .-'  '.                  <br/>
&nbsp;                       ( (.   )&:                  <br/>
&nbsp;                   .'    / (_  )                   <br/>
&nbsp;                    _. :(.   )&3  '                <br/>
&nbsp;                .  (  '-' (  '.   .                <br/>
&nbsp;                 .  :  (   .0&0)                   <br/>
&nbsp;                /_'( "0 '0. )"'                    <br/>
&nbsp;            (  (/  .  ' )=='                       <br/>
&nbsp;           (   (    )  .&"   +                     <br/>
&nbsp;             (''&0.( _(   (                        <br/>
&nbsp;          ..-. '&3    ) '  )  +                    <br/>
&nbsp;        -'   (      -0b:  )                        <br/>
&nbsp;      '    _  '    (&3"Y0                          <br/>
&nbsp;    _(    (    )b  -'.  ) +                        <br/>
&nbsp;   ( &)  ( _.03" _0   \( \   *                     <br/>
&nbsp;      +  )/    (&3   (&&   |`-:_    )  )                          <br/>
&nbsp;  ,----....____   (0:f     |    `+.                               <br/>
&nbsp; (             ````----....|___   |        |🇰🇵                    <br/>
&nbsp;  \     _                        ````----..|.____                 <br/>
&nbsp;   \    _)                                       ```---.._        <br/>
&nbsp;    \                                                     \       <br/>
&nbsp;  )`.\  )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`.   )`. <br/>
&nbsp;-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `-'   `<br/>
<b><SecSpanStyle>우 리 는     빈    단 어 를     말 하 지     않 는 다</SecSpanStyle></b><br/>
    </DefaultAsciiStyle>
  </ThemeProvider>
</div>
);

const ASCIISkull = () => (
  <div>
    <ThemeProvider theme={theme}>
<DefaultAsciiStyle>
│                                                                          │<br/>
│                                   ,,..                                   │<br/>
│                                 ,@$$$$$.                                 │<br/>
│                               .,$$$$$$$$i                                │<br/>
│                         .,z$""')$$$$$$$$C'^#'-..                         │<br/>
│                      ,zF'        '""#*"'       "*o.                      │<br/>
│                   ,zXe>        u:..        ..      "c                    │<br/>
│                 ,' zP'    ,:'"          .            "N.                 │<br/>
│               ,d",d$   ,'"   ,uB" .,uee..,?R.  ,  .    ^$.               │<br/>
│             ,@P d$"     .:$$$$$$$$$$$$$@$CJN.,"    '     #b              │<br/>
│            z$" d$P    :SM$$$$$$$$$$$$$$$$$$$Nf.           ^$.            │<br/>
│           J$" J$P  , ,@$$$$$$$$$$$$$$$$$$$$$$$$$k.         "$r           │<br/>
│          z$   $$.   ,$$$$$$$$$$$$$$$$$$$$$$$$$$f'   .    .   $b          │<br/>
│         ,$"  $$u,-.x'^""$$$$$$$$$$$$$$$$$$$$$$$$$.        '.  $k         │<br/>
│         $"  :$$$$- 8.   '#$$$$$$$$$$$$$$$$$$$$$"|  d  .    F   $.        │<br/>
│        $P  .$$$$$N '$b.  $$$$$$$$$$$$$$$$$$$$$k.$  $"  :   '   '$        │<br/>
│       -$'  4$$k $$c '*$.,Q$$$$$$$$$$$$$$$$$$$$$$$ ..            $L       │<br/>
│       $P   4$$$$$F:   '"$$$$$$$$$$$$$$$$$$$$$$''$"     .   ,    '$       │<br/>
│      ,$'  ,$$$$$d$$    '##$$c3$$$$$$$$$$$$$$$$. '      :   L.    $.      │<br/>
│      J$  u$$$$$$$$$.,oed$*$$$$N "#$$$$$$$$$$***$@$N. , $  ,B$$N.,9L      │<br/>
│      $F,$$$$$$$$$$,@*"'  'J$$$$$#h$$$$$$P"'     '"*$$. $4W$' "$$uJF      │<br/>
│      4$$$$$$$$$$$$F'      $*''$$RR@$$$$$R        ,' "$d$4"    '$$$R      │<br/>
│     ,$$$$$$$$$$$$$F     ,'    @$.3$$$$ R-            '$F$  dN.4$$$$.     │<br/>
│    :$$$$$$$$$$$$*$"          J$'$$$$$& $.             $'   $$$$$$$$$o    │<br/>
│     ^$$$$$$$$$$B@$$          $P $$$"?N/$k             $r   $$P"*$$$$'    │<br/>
│       $$i  .$$$$"$'         $$ ~R$P '$k^$$,'          $   "'  ,d$$'      │<br/>
│       $$$$ J$$$$ ','    .,z$P'd.$P   #$. #$$u.       .$  eu. ,d$$$       │<br/>
│       $^$$$$$$$$. '"=+=N#'.,d$M$$'   '$$@s.#$$$u.   ,$C  $$$@$$$"$       │<br/>
│       "  '*$$$$$$bx..        ,M$"     '*$$$b/""$R"*"'d$ ,$$$$P"  '       │<br/>
│       4     "$$k3$9$$B.e.  ,ud$F       '3$$$$b.      ,$,@R$*'    4       │<br/>
│       :       *$$$$$$$b$$@$$$$$L   ,.  ,J$$.'**$$k$NX$"M"'       .       │<br/>
│       $         "$#"  '" -$$$$$$c,z$N.,o$$$$   ,NW$*"'           $       │<br/>
│       $.         ',    '$$$$$$$$$d$$$$$$$$$f ,$e*'               $       │<br/>
│      ,$c         d.     '^$$$$$$$$$$$$$$$$$.u '"                :$.      │<br/>
│      $$$         $|   .,  '"#$$$*$$$$$$$$$$$$ '                 4$F      │<br/>
│      $$"         $ '  k.'.     ''"#'"""'      ,' ,'             '$$      │<br/>
│      '"          $-,  'b.,ce(b:o uz CCLd$4$*F?|,o                "'      │<br/>
│                  $&    $$k'*"$$$$$$#$$$$$$$$$$ d'                        │<br/>
│                  $$.,$$$$$$$$,e,$#$.*$'""""'e4 $                         │<br/>
│                  '$$$$  ^$$|$"$$$$$$$$$$$$$$$.eL                         │<br/>
│                   $$$"  $$$$$$$e$.$.$$.$e$d$$$$k                         │<br/>
│                   R'$$  '$$$$$$$$$$$$$$$$$$$$$$P                         │<br/>
│                   '  $Nc'"$$N3$$$$$$$$$$$$$$$$$'                         │<br/>
│                       *$  9$.'@$$$$$$$$$$R$$$#'                          │<br/>
│                        '$.  '"*$$$$$$$$$$P'' #                           │<br/>
│                          "$u.    '""""''   ,'                            │<br/>
│                            '"$Nu.   .,z-p"'                              │<br/>
│                                '"####""'                                 │<br/>
│                                                                          │<br/>
</DefaultAsciiStyle>
</ThemeProvider>
</div>
);

export {ASCIISkull, ASCIIRocket, ASCIIRocketFrame, Logo}
