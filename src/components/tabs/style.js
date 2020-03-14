import styled from 'styled-components';
import { Theme } from 'Styles/theme';

export const Wrapper = styled.div`
    background: ${Theme.sideBar};
    font-size: 13px;
    line-height: 18px;
`;

export const Ul = styled.ul`
    background: ${Theme.tabs};
    margin: 0;
    display: inline-flex;
    align-items: center;
    text-transform: lowercase;
`

export const Li = styled.li`
    position: relative;
    a {
        color: rgba(255, 255, 255, 0.5);
        display: inline-block;
        padding: 10px 25px;
        &.active {
            background: ${Theme.sideBar};
            color: rgba(255, 255, 255, 1);
            &:after {
                content: '';
                position: absolute;
                background: ${Theme.tabsBorderBottom};
                height:1px;
                width: 100%;
                left: 0;
                bottom: 0;
            }
        }
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
`