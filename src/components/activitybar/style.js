import styled from 'styled-components';
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    background: ${props => props.theme.activityBar};
    text-align: center;
    width: 50px;
    position: relative;
    z-index: 1;
    @media (max-width: 480px) {
      width: 30px;
    }
    ul {
        margin-top: 5px;
    }
`;

export const Link = styled(motion.a)`
    display: block;
    margin-bottom: 30px;
    @media (max-width: 480px) {
        margin-bottom: 10px;
    }
    svg {
        cursor: pointer;
        width: 25px;
        height: 25px;
        fill: ${props => props.theme.textColor};
        &:hover {
            fill: ${props => props.theme.textActiveColor};
        }
        @media (max-width: 480px) {
            width: 15px;
            height: 15px;
        }
    }
`;

export const Mode = styled(motion.div)`
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    @media print {
        display:none;
    }
    svg {
        width: 25px;
        height: 25px;
        cursor: pointer;
        fill: ${props => props.theme.mode};
        @media (max-width: 480px) {
            width: 15px;
            height: 15px;
        }
    }
`;

export const List = {
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration: 0.3
        }
    },
    hidden: {
        transition: {
            when: "afterChildren",
            staggerChildren: 0.3,
            duration: 0.8
        }
    }
};

export const Item = {
    visible: {
        opacity: 1,
        y: 0
    },
    hidden: {
        opacity: 0,
        y: -100
    }
};