import styled, { createGlobalStyle, css } from 'styled-components';

const fontFamily = 'Monaco, Menlo, Inconsolata, "Courier New", monospace';

export const GlobalStyle =  createGlobalStyle`

  html {
    font-size: 14px;
    @media 
    (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
       font-size: 15px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
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
  @media (max-width: 768px) {
      width: auto;
  }
  @media (max-width: 480px) {
    height: calc(100vh - 12px);
  }
`
export const Container = styled.div`
  display: flex;
`
export const ContentWrap = styled.div`
  width: calc(100% - 227px);
  background: ${props => props.theme.editorBg};
  @media (max-width: 768px) {
      width: calc(100% - 50px);
  }
  @media (max-width: 480px) {
      width: calc(100% - 30px);
  }
  `

  export const LoadingChunks = styled.div`
    text-align: center;
    color: ${props => props.theme.textColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `