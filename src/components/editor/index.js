import React from 'react';
import { Wrapper, Span, Pre } from './style';
import { ImportColor, ContentColor } from '../../styles/theme';

const Editor = (props) => {
    let text = "import Intro from 'Introduction'";
    let header = text.split(' ').map((str, index) => <Span key={str} color={ImportColor[`color${index}`]}>{str} </Span>);
    
    let content = `{
        .Introduction {
            Namaste {
                Name: 'Amit Mishra',
                Designation: 'Senior Web Developer'
            }
        }
}`;

    let count = 0;
    let color = '';
    let detail = content.split("\n").map((str, index) => {
        if (index >= 6) {
            color = ContentColor[`color${count}`];
            count++;
        } else {
            color = ContentColor[`color${index}`]
        }
        console.log(color);
                        
        return (
            <Pre key={`${str + index}-detail`} color={color}>{str} </Pre>
        );

        i++;
    });
    
    return (
        <Wrapper>
            {header}
            {detail}
        </Wrapper>
    )
}

export default Editor;