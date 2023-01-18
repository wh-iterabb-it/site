import React from "react"
import styled from "styled-components"

const DefaultAsciiStyle = styled.pre`
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  display: inline-block;
  width: 100%;
  white-space: pre-wrap;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, "Lucida Console",
    "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Courier New", monospace, sans-serif;
  font-size: 10px;
  letter-spacing: -0.1rem;
  line-height: 0.7rem;

  margin-top: 2 rem;
  color: ${(props) => props.theme.main_color};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.link_color};
  }

  @media only screen and (min-width: ${(props) => props.theme.min_width}) {
    font-size: 16px;
    width: ${(props) => props.theme.max_width};
    line-height: 0.8rem;
  }
`
//text-shadow: 0 0 2px rgba(100,100,100,0.5);
const LayoutContainerStyle = styled.div`
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.background};
  position: relative;
  text-align: center;
`

const LayoutStyle = styled.div`
  margin: auto;
  width: 100%;
  font-size: 10px;

  @media only screen and (min-width: ${(props) => props.theme.min_width}) {
    font-size: 16px;
    width: ${(props) => props.theme.max_width};
  }
`

const MainSpanStyle = styled.span`
  color: ${(props) => props.theme.main_color};
`

const PrimeSpanStyle = styled.span`
  color: ${(props) => props.theme.primary_color};
`

const SecSpanStyle = styled.span`
  color: ${(props) => props.theme.secondary_color};
`

const TriSpanStyle = styled.span`
  color: ${(props) => props.theme.trinary_color};
`

// we are passing a default theme
DefaultAsciiStyle.defaultProps = {
  theme: {
    min_width: "768px",
    max_width: "40rem",
    main_color: "#FFFFFF",
    link_color: "#66CC66", // green
    line_height: "1rem",
    primary_color: "#CCCC66", // yellow
    secondary_color: "#66CCCC", // blue
    trinary_color: "#CC6666", // red
    background: "#051120",
  },
}

MainSpanStyle.defaultProps = {
  theme: {
    main_color: "#FFFFFF", // white
  },
}

PrimeSpanStyle.defaultProps = {
  theme: {
    primary_color: "#CCCC66", // yellow
  },
}

SecSpanStyle.defaultProps = {
  theme: {
    secondary_color: "#66CCCC", // blue
  },
}

TriSpanStyle.defaultProps = {
  theme: {
    trinary_color: "#CC6666", // red
  },
}

LayoutContainerStyle.defaultProps = {
  theme: {
    background: "#051120",
  },
}

LayoutStyle.defaultProps = {
  theme: {
    min_width: "768px",
    max_width: "40rem",
  },
}

export {
  DefaultAsciiStyle,
  LayoutContainerStyle,
  LayoutStyle,
  MainSpanStyle,
  PrimeSpanStyle,
  SecSpanStyle,
  TriSpanStyle,
}
