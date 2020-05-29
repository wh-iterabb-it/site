import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import {Header, DefaultAsciiStyle, LayoutContainerStyle, LayoutStyle, MainSpanStyle, PrimeSpanStyle, SecSpanStyle, TriSpanStyle} from '../components/delta';
import styled, { ThemeProvider } from 'styled-components';
import {ImageLogo} from '../components/logo';

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

const DeltaPage = () => (
<div>
  <ThemeProvider theme={theme}>
    <LayoutContainerStyle>
      <LayoutStyle>
        <SEO title='Delta - Bad Actor Traffic Visualizer' />
        <Header />
        <DefaultAsciiStyle>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br/>
          <br/>
        </DefaultAsciiStyle>


      </LayoutStyle>
    </LayoutContainerStyle>
  </ThemeProvider>
</div>
);


export default DeltaPage
