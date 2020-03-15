import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.activityBar};
    text-align: center;
    width: 50px;
    position: relative;
    @media (max-width: 480px) {
      width: 30px;
    }
`;

export const Link = styled.a`
    display: block;
    margin-bottom: 30px;
    @media (max-width: 480px) {
        margin-bottom: 10px;
    }
    svg {
        cursor: pointer;
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.textColor};
        &:hover {
            fill: ${props => props.theme.textActiveColor};
        }
        @media (max-width: 480px) {
            width: 15px;
            height: 15px;
        }
    }
`;

export const Mode = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
        fill: ${props => props.theme.mode};
        @media (max-width: 480px) {
            width: 15px;
            height: 15px;
        }
    }
`;
