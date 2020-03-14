import React from 'react';
import { Wrapper } from './style';
import Facebook from 'Assets/svg/facebook.svg';
import Twitter from 'Assets/svg/twitter.svg';
import Linkedin from 'Assets/svg/linkedin.svg';
import Github from 'Assets/svg/github.svg';
import Resume from 'Assets/svg/resume.svg';

const ActivityBar = () => {
    return (
        <Wrapper>
            <ul>
                <li><Resume /></li>
                <li><Linkedin /></li>
                <li><Twitter /></li>
                <li><Github /></li>
                <li><Facebook /></li>
                
            </ul>
        </Wrapper>
    )
}

export default ActivityBar;