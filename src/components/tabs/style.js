import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.sideBar};
    font-size: 13px;
    line-height: 18px;
`;

export const Ul = styled.ul`
    background: ${props => props.theme.tabs};
    margin: 0;
    display: inline-flex;
    align-items: center;
    text-transform: lowercase;
`

export const Li = styled.li`
    position: relative;
    a {
        color: ${props => props.theme.textColor};
        display: inline-block;
        padding: 10px 25px;
        &.active {
            background: ${props => props.theme.sideBar};
            color: ${props => props.theme.textActiveColor};
            &:after {
                content: '';
                position: absolute;
                background: ${props => props.theme.tabsBorderBottom};
                height:1px;
                width: 100%;
                left: 0;
                bottom: 0;
            }
        }
        &:hover {
            color: ${props => props.theme.textActiveColor};
        }
    }
`