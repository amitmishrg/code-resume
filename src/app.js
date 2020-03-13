import React from 'react';
import { render } from "react-dom";
import { GlobalStyle, SideBarWrapper, Container, ContentWrap } from "./styles/globalStyle";
import TitleBar from './components/titlebar';
import ActivityBar from './components/activitybar';
import SideBar from './components/sidebar';
import TabList from './components/tabs';
import Editor from './components/editor';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <TitleBar />
            <Container>
                <SideBarWrapper>
                    <ActivityBar />
                    <SideBar />
                </SideBarWrapper>

                <ContentWrap>
                    <TabList />
                    <Editor
                    />
                </ContentWrap>
            </Container>
        </>
    )
}

render(<App />, document.getElementById('root'));