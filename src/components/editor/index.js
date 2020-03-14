import React from 'react';
import { Wrapper, Span, Pre } from './style';
import { HeaderColor, ContentColor } from 'Styles/theme';

const Editor = (props) => {    
    const tab = props.path;
    const info = props.data && props.data[tab];
    let count = 0, color = '';
    
    const header = info.header.split(' ').map((str, index) => {
        return <Span key={str} color={HeaderColor[`color${index}`]}>{str} </Span>
    });

    const detail = info.content.split("\n").map((str, index) => {
        if (count >= 6) count = 0;
        if (index >= 6) {
            color = ContentColor[`color${count}`];
            count++;
        } else {
            color = ContentColor[`color${index}`]
        }
        return <Pre key={`${str + index}-detail`} color={color}>{str} </Pre>
    });
    
    return (
        <Wrapper>
            {header}
            {detail}
        </Wrapper>
    )
}

export default Editor;