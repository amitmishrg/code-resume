import React from 'react';
import { Wrapper, IconWrap, CloseIcon, MinimizeIcon, ExpandIcon, Title} from './style'

const TitleBar = (props) => {
        
    return (
        <Wrapper>
            <IconWrap>
                <CloseIcon></CloseIcon>
                <MinimizeIcon></MinimizeIcon>
                <ExpandIcon></ExpandIcon>
            </IconWrap>
            <Title>{props.title}</Title>
        </Wrapper>
    )
}

export default TitleBar;