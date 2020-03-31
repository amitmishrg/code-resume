import styled, { createGlobalStyle, css } from 'styled-components';

const fontFamily = 'Monaco, Menlo, Inconsolata, "Courier New", monospace';

export const GlobalStyle =  createGlobalStyle`

  html {
    font-size: 14px;
    -webkit-print-color-adjust: exact;
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
  .fork-me {
    background: ${props => props.theme.forkMeBg};
    position: absolute;
    color: #fff;
    top: 24px;
    right: -32px;
    z-index: 1;
    transform: rotate(45deg);
    font-size: 8px;
    padding: 5px 25px;
    filter: blur(.2px);
    box-shadow: 1px 4px 12px rgba(164,164,164,.3);
    @media print {
        display:none;
    }
    @media only screen and (max-width: 900px) {
      display: none;
    }
    a {
      display: block;
      color: ${props => props.theme.forkMeText};
      padding: 0;
      font-weight: bold;
      text-decoration: none;
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