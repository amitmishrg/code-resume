import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.titleBar};
    width: 100%;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DivWrap = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    background: ${props => props.theme.activityBar};
`;

export const Title = styled.p`
    font-size: .86rem;
    color: ${props => props.theme.textColor};
`;
