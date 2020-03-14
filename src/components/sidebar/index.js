import React from 'react';
import { NavLink } from "react-router-dom";
import { Wrapper, Label, Ul, Li} from './style';
import Tabs from '../../data';

const SideBar = () => {
    
    const List = Object.keys(Tabs).map(list => {
        return (
            <Li key={list}>
                <NavLink to={`/${list.toLowerCase()}`} activeClassName="active">{list}</NavLink>
            </Li>
        )
    });        
    return (
        <Wrapper>
            <Label>Explorer</Label>
            <Ul>
                {List}
            </Ul>
        </Wrapper>
    )
}

export default SideBar;