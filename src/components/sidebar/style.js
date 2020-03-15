import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.sideBar};
    font-size: .93rem;
    line-height: 2.15rem;
    color: ${props => props.theme.textColor};
    width: 177px;
    @media (max-width: 768px) {
      display: none;
    }
`;

export const Label = styled.p`
    font-size: .8rem;
    text-transform: uppercase;
    line-height: 1.6rem;
    padding-left: 20px;
`;

export const Ul = styled.ul`
   margin-top: 30px;
`

export const Li = styled.li`
    a {
        text-transform: capitalize;
        display: block;
        padding: 5px 10px 5px 20px;
        color: ${props => props.theme.textColor};
        &.active {
            background: ${props => props.theme.sideBarActiveBg};
            color: ${props => props.theme.textActiveColor};
        }
        &:hover {
            color: ${props => props.theme.textActiveColor};
        }
    }
`