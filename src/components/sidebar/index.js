import React from 'react';
import { Wrapper, Label, Ul, Li} from './style';
import { Tabs } from '../../constant';

const SideBar = () => {
    const List = Tabs.map(list => <Li key={list} >{list}</Li>);        
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