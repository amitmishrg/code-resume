import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle, SideBarWrapper, Container, ContentWrap } from "Styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from 'Styles/theme';
import TitleBar from 'Cmpts/titlebar';
import ActivityBar from 'Cmpts/activitybar';
import SideBar from 'Cmpts/sidebar';
import TabList from 'Cmpts/tabs';
import Editor from 'Cmpts/editor';
import NotFound from 'Cmpts/notfound';

export const App = (props) => {
    const [theme, setTheme] = useState('dark');
    const Data = props.data;
    const keys = Object.keys(Data);
    
    const mode = theme === 'dark' ? Theme.dark : Theme.light;
    const routePaths = keys.map(path => {
        return (
            <Route path={`/${path}`} key={path}>
                <Editor data={Data} path={path}/>
            </Route>
        )
    });
    return (
        <ThemeProvider theme={mode}>
            <Router>
                <GlobalStyle />
                <TitleBar />
                <Container>
                    <SideBarWrapper>
                        <ActivityBar 
                            socialLinks={props.socialLinks}
                            currentTheme={theme}
                            setTheme={setTheme}
                        />
                        <SideBar data={Data} />
                    </SideBarWrapper>
                    <ContentWrap>
                        <TabList data={Data} />
                        <Switch>
                            {routePaths}
                            <Redirect exact from="/" to={keys[0]} />
                            <Route>
                                <NotFound />
                            </Route>
                        </Switch>
                    </ContentWrap>
                </Container>
            </Router>
        </ThemeProvider>
    )
}
