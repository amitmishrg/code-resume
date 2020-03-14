import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.activityBar};
    text-align: center;
    width: 50px;
    position: relative;
`;

export const Link = styled.a`
    display: block;
    margin-bottom: 30px;
    svg {
        cursor: pointer;
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.textColor};
        &:hover {
            fill: ${props => props.theme.textActiveColor};
        }
    }
`;

export const Mode = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    svg {
        cursor: pointer;
        fill: ${props => props.theme.mode};
    }
`;
