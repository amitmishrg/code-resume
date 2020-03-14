import React from 'react';
import { Wrapper, Link, Mode } from './style';
import Twitter from 'Assets/svg/twitter.svg';
import Linkedin from 'Assets/svg/linkedin.svg';
import Github from 'Assets/svg/github.svg';
import Resume from 'Assets/svg/resume.svg';
import Moon from 'Assets/svg/moon.svg';

const ActivityBar = (props) => {
    const { socialLinks } = props;
    const setMode = () => {
        const mode = props.currentTheme === 'dark' ? 'light' : 'dark';
        props.setTheme(mode)
    }

    return (
        <Wrapper>
            <ul>
                <Link href={socialLinks.resume} target="_blank">
                    <Resume />
                </Link>
                <Link href={socialLinks.linkedin} target="_blank">
                    <Linkedin />
                </Link>
                <Link href={socialLinks.twitter} target="_blank">
                    <Twitter />
                </Link>
                <Link href={socialLinks.github} target="_blank">
                    <Github />
                </Link>
            </ul>

            <Mode>
                <Moon onClick={setMode}/>
            </Mode>
        </Wrapper>
    )
}

export default ActivityBar;