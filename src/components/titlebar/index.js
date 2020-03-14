import React from 'react';
import { Wrapper, IconWrap, CloseIcon, MinimizeIcon, ExpandIcon, Title} from './style'

const TitleBar = () => {
    return (
        <Wrapper>
            <IconWrap>
                <CloseIcon></CloseIcon>
                <MinimizeIcon></MinimizeIcon>
                <ExpandIcon></ExpandIcon>
            </IconWrap>
            <Title> Amit Mishra ~ Senior Web Developer</Title>
        </Wrapper>
    )
}

export default TitleBar;