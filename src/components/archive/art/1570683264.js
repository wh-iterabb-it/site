import React from 'react';
import styled from 'styled-components';

import {DefaultAsciiStyle, LayoutContainerStyle, LayoutStyle, MainSpanStyle, PrimeSpanStyle, SecSpanStyle, TriSpanStyle} from '../';

const ASCIIRocket = () => (
<DefaultAsciiStyle>
&nbsp;                                            ,:   <br/>
&nbsp;                                          ,' |   <br/>
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
&nbsp; +  )/    (&3   (&&    )  )                        <br/>
&nbsp;    (0:f                                           <br/>
  우리는 빈 단어를 말하지 않는다<br/>
</DefaultAsciiStyle>
);

const ASCIISkull = () => (
<DefaultAsciiStyle>
&nbsp;                                ,,..                                 <br/>
&nbsp;                              ,@$$$$$.                               <br/>
&nbsp;                            .,$$$$$$$$i                              <br/>
&nbsp;                      .,z$""')$$$$$$$$C'^#'-..                       <br/>
&nbsp;                   ,zF'        '""#*"'       "*o.                    <br/>
&nbsp;                ,zXe>        u:..        ..      "c                  <br/>
&nbsp;              ,' zP'    ,:'"          .            "N.               <br/>
&nbsp;            ,d",d$   ,'"   ,uB" .,uee..,?R.  ,  .    ^$.             <br/>
&nbsp;          ,@P d$"     .:$$$$$$$$$$$$$@$CJN.,"    '     #b            <br/>
&nbsp;         z$" d$P    :SM$$$$$$$$$$$$$$$$$$$Nf.           ^$.          <br/>
&nbsp;        J$" J$P  , ,@$$$$$$$$$$$$$$$$$$$$$$$$$k.         "$r         <br/>
&nbsp;       z$   $$.   ,$$$$$$$$$$$$$$$$$$$$$$$$$$f'   .    .   $b        <br/>
&nbsp;      ,$"  $$u,-.x'^""$$$$$$$$$$$$$$$$$$$$$$$$$.        '.  $k       <br/>
&nbsp;      $"  :$$$$- 8.   '#$$$$$$$$$$$$$$$$$$$$$"|  d  .    F   $.      <br/>
&nbsp;     $P  .$$$$$N '$b.  $$$$$$$$$$$$$$$$$$$$$k.$  $"  :   '   '$      <br/>
&nbsp;    -$'  4$$k $$c '*$.,Q$$$$$$$$$$$$$$$$$$$$$$$ ..            $L     <br/>
&nbsp;    $P   4$$$$$F:   '"$$$$$$$$$$$$$$$$$$$$$$''$"     .   ,    '$     <br/>
&nbsp;   ,$'  ,$$$$$d$$    '##$$c3$$$$$$$$$$$$$$$$. '      :   L.    $.    <br/>
&nbsp;   J$  u$$$$$$$$$.,oed$*$$$$N "#$$$$$$$$$$***$@$N. , $  ,B$$N.,9L    <br/>
&nbsp;   $F,$$$$$$$$$$,@*"'  'J$$$$$#h$$$$$$P"'     '"*$$. $4W$' "$$uJF    <br/>
&nbsp;   4$$$$$$$$$$$$F'      $*''$$RR@$$$$$R        ,' "$d$4"    '$$$R    <br/>
&nbsp;  ,$$$$$$$$$$$$$F     ,'    @$.3$$$$ R-            '$F$  dN.4$$$$.   <br/>
&nbsp; :$$$$$$$$$$$$*$"          J$'$$$$$& $.             $'   $$$$$$$$$o  <br/>
&nbsp;  ^$$$$$$$$$$B@$$          $P $$$"?N/$k             $r   $$P"*$$$$'  <br/>
&nbsp;    $$i  .$$$$"$'         $$ ~R$P '$k^$$,'          $   "'  ,d$$'    <br/>
&nbsp;    $$$$ J$$$$ ','    .,z$P'd.$P   #$. #$$u.       .$  eu. ,d$$$     <br/>
&nbsp;    $^$$$$$$$$. '"=+=N#'.,d$M$$'   '$$@s.#$$$u.   ,$C  $$$@$$$"$     <br/>
&nbsp;    "  '*$$$$$$bx..        ,M$"     '*$$$b/""$R"*"'d$ ,$$$$P"  '     <br/>
&nbsp;    4     "$$k3$9$$B.e.  ,ud$F       '3$$$$b.      ,$,@R$*'    4     <br/>
&nbsp;    :       *$$$$$$$b$$@$$$$$L   ,.  ,J$$.'**$$k$NX$"M"'       .     <br/>
&nbsp;    $         "$#"  '" -$$$$$$c,z$N.,o$$$$   ,NW$*"'           $     <br/>
&nbsp;    $.         ',    '$$$$$$$$$d$$$$$$$$$f ,$e*'               $     <br/>
&nbsp;   ,$c         d.     '^$$$$$$$$$$$$$$$$$.u '"                :$.    <br/>
&nbsp;   $$$         $|   .,  '"#$$$*$$$$$$$$$$$$ '                 4$F    <br/>
&nbsp;   $$"         $ '  k.'.     ''"#'"""'      ,' ,'             '$$    <br/>
&nbsp;   '"          $-,  'b.,ce(b:o uz CCLd$4$*F?|,o                "'    <br/>
&nbsp;               $&    $$k'*"$$$$$$#$$$$$$$$$$ d'                      <br/>
&nbsp;               $$.,$$$$$$$$,e,$#$.*$'""""'e4 $                       <br/>
&nbsp;               '$$$$  ^$$|$"$$$$$$$$$$$$$$$.eL                       <br/>
&nbsp;                $$$"  $$$$$$$e$.$.$$.$e$d$$$$k                       <br/>
&nbsp;                R'$$  '$$$$$$$$$$$$$$$$$$$$$$P                       <br/>
&nbsp;                '  $Nc'"$$N3$$$$$$$$$$$$$$$$$'                       <br/>
&nbsp;                    *$  9$.'@$$$$$$$$$$R$$$#'                        <br/>
&nbsp;                     '$.  '"*$$$$$$$$$$P'' #                         <br/>
&nbsp;                       "$u.    '""""''   ,'                          <br/>
&nbsp;                      '"$Nu.&nbsp;  .,z-p"'                          <br/>
&nbsp;                             '"####""'                               <br/>
</DefaultAsciiStyle>
);

export {ASCIIRocket, ASCIISkull}
