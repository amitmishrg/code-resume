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
            <Title> Amit Mishra </Title>
        </Wrapper>
    )
}

export default TitleBar;