import styled from 'styled-components';
import { ImportColor } from '../../styles/theme';

export const Wrapper = styled.div`
    font-size: 14px;
    line-height: 21px;
    padding: 10px 25px;
`;

export const Span = styled.span`
    color: ${props => props.color};
`;

export const Pre = styled.pre`
    color: ${props => props.color}
`;
