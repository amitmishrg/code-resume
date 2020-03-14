import styled, { createGlobalStyle, css } from 'styled-components';

const fontFamily = 'Monaco, Menlo, Inconsolata, "Courier New", monospace';

export const GlobalStyle =  createGlobalStyle`

  body {
    background: ${props => props.theme.body};
    padding: 0;
    margin: 0;
    font-family: ${fontFamily};
    overflow: hidden;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  pre {
    font-family: ${fontFamily};
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export const SideBarWrapper = styled.div`
  display: inline-flex;
  width: 227px;
  height: calc(100vh - 20px);
`
export const Container = styled.div`
  display: flex;
`
export const ContentWrap = styled.div`
  width: calc(100% - 227px);
  background: ${props => props.theme.editorBg};
`