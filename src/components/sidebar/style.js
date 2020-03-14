import styled from 'styled-components';
import { Theme } from 'Styles/theme';

export const Wrapper = styled.div`
    background: ${Theme.sideBar};
    font-size: 13px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.6);
    width: 177px;
`;

export const Label = styled.p`
    font-size: 11px;
    text-transform: uppercase;
    line-height: 22px;
    padding-left: 20px;
`;

export const Ul = styled.ul`
   margin-top: 30px;
`

export const Li = styled.li`
    a {
        text-transform: capitalize;
        display: block;
        padding-left: 20px;
        color: rgba(255, 255, 255, 0.6);
        &.active {
            background: rgba(52, 41, 79, 0.4);
        }
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
`