import React from 'react';
import { Wrapper, Ul, Li} from './style';
import { Tabs } from '../../constant';

const TabList = () => {
    const List = Tabs.map(list => <Li key={list}>{list}</Li>);        
    return (
        <Wrapper>
            <Ul>
                {List}
            </Ul>
        </Wrapper>
    )
}
export default TabList;