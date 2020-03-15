import React from 'react';
import { Wrapper, DivWrap, Title} from './style'

const TitleBar = (props) => {
        
    return (
        <Wrapper>
            <DivWrap></DivWrap>
            <Title>{props.title}</Title>
        </Wrapper>
    )
}

export default TitleBar;