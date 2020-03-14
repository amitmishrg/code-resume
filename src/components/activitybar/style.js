import styled from 'styled-components';
import { Theme } from 'Styles/theme';

export const Wrapper = styled.div`
    background: ${Theme.activityBar};
    text-align: center;
    width: 50px;
    li {
        margin-bottom: 30px;
    }
    svg {
        cursor: pointer;
        width: 25px;
        height: 25px;
        fill: rgba(255, 255, 255, 0.5);
        &:hover {
            fill: rgba(255, 255, 255, 0.8);
        }
    }
`;

