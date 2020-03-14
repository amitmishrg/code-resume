import styled from 'styled-components';

export const Wrapper = styled.div`
    font-size: 14px;
    line-height: 21px;
    padding: 10px 25px;
    height: calc(100vh - 78px);
    overflow: auto;
    cursor: text;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.tabsBorderBottom};
    }
`;

export const Span = styled.span`
    color: ${props => props.color};
`;

export const Pre = styled.pre`
    color: ${props => props.color}
`;
