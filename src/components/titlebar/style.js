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

export const IconWrap = styled.div`
    position: absolute;
    left: 5px;
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Icon = styled.i`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    margin-right: 5px;
`;

export const CloseIcon = styled(Icon)`
    background: #fe5e57;
`;

export const MinimizeIcon = styled(Icon)`
    background: #febd2e;
`;

export const ExpandIcon = styled(Icon)`
    background: #28ca41;
`;

export const Title = styled.p`
    font-size: 12px;
    color: ${props => props.theme.textColor};
`;
