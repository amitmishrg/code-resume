import React from 'react';
import { motion } from "framer-motion";
import { Wrapper, Link, Mode, List, Item } from './style';
import Twitter from 'Assets/svg/twitter.svg';
import Linkedin from 'Assets/svg/linkedin.svg';
import Github from 'Assets/svg/github.svg';
import Resume from 'Assets/svg/resume.svg';
import Moon from 'Assets/svg/moon.svg';

const ActivityBar = (props) => {
    const { socialLinks, theme, setTheme } = props;

    const setMode = () => {
        const mode = theme === 'dark' ? 'light' : 'dark';
        setTheme(mode);
    }

    return (
        <Wrapper>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={List}
            >
                <Link variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.resume} target="_blank">
                    <Resume />
                </Link>
                <Link variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.linkedin} target="_blank">
                    <Linkedin />
                </Link>
                <Link variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.twitter} target="_blank">
                    <Twitter />
                </Link>
                <Link variants={Item} whileHover={{ scale: 1.2 }} href={socialLinks.github} target="_blank">
                    <Github />
                </Link>
            </motion.ul>

            <Mode whileHover={{ scale: 1.2 }}>
                <Moon onClick={setMode}/>
            </Mode>
        </Wrapper>
    )
}

export default ActivityBar;