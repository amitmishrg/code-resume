import styled from 'styled-components';

export const Wrapper = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 10px 10px 10px 50px;
    height: calc(100vh - 78px);
    overflow: auto;
    cursor: text;
    position: relative;
    @media (max-width: 480px) {
      height: calc(100vh - 73px);
    }
    &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.tabsBorderBottom};
    }
`;

export const PageWrap = styled.div`
    position: relative;
`;

export const LineNo = styled.span`
    position: absolute;
    text-align: center;
    left: -40px;
    width: 30px;
    display: block;
    color: ${props => props.theme.textLightColor};
`;

export const FirstLineNo = styled.span`
    position: absolute;
    text-align: center;
    left: 10px;
    width: 30px;
    display: block;
    color: ${props => props.theme.textLightColor};
    @media (max-width: 480px) {
      left: 0;
      width: 20px;
    }
`;

export const Span = styled.span`
    color: ${props => props.color};
`;

export const Pre = styled.pre`
    color: ${props => props.color}
`;
