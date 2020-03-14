import React, { useContext } from 'react';
import { Wrapper, Span, Pre, PageWrap, LineNo, FirstLineNo } from './style';
import { ThemeContext } from 'styled-components';

const Editor = (props) => {  
    const theme = useContext(ThemeContext);        
    const tab = props.path;
    const fTabName = tab.charAt(0).toUpperCase();
    const rTabName = tab.slice(1);
    const content = props.data && props.data[tab];       
    const head = `import ${fTabName}${rTabName} from '${fTabName}${rTabName}'`;
    
    let count = 0, color = '';
    
    const header = head.split(' ').map((str, index) => {
        return <Span key={str} color={theme.headerColor[`color${index}`]}>{str} </Span>
    });

    const detail = content.split("\n").map((str, index) => {
        if (count >= 6) count = 0;
        if (index >= 6) {
            color = theme.contentColor[`color${count}`];
            count++;
        } else {
            color = theme.contentColor[`color${index}`]
        }
        return (
            <PageWrap key={index}>
                <LineNo>{index + 2}</LineNo>
                <Pre key={`${str + index}-detail`} color={color}>{str} </Pre>
            </PageWrap>
        )
    });
    
    return (
        <Wrapper>
            <FirstLineNo>1</FirstLineNo>
            {header}
            {detail}
        </Wrapper>
    )
}

export default Editor;