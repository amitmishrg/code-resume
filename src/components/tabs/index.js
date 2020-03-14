import React from 'react';
import { NavLink } from "react-router-dom";
import { Wrapper, Ul, Li} from './style';
import Tabs from '../../data';

const TabList = () => {
    const List = Object.keys(Tabs).map(list => {
        return (
            <Li key={list}>
                <NavLink to={`/${list.toLowerCase()}`} activeClassName="active">{list}</NavLink>
            </Li>
        );
    });        
    return (
        <Wrapper>
            <Ul>
                {List}
            </Ul>
        </Wrapper>
    )
}
export default TabList;