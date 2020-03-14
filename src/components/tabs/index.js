import React from 'react';
import { NavLink } from "react-router-dom";
import { Wrapper, Ul, Li} from './style';

const TabList = (props) => {
    const Tabs = props.data && Object.keys(props.data);
    const List = Tabs.map(list => {
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