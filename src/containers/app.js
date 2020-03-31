import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle, SideBarWrapper, Container, ContentWrap, LoadingChunks } from "Styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from 'Styles/theme';
import useLocalStorage from 'Cmpts/hooks';

const TitleBar = React.lazy(() => import('Cmpts/titlebar'));
const ForkMe = React.lazy(() => import('Cmpts/forkme'));
const ActivityBar = React.lazy(() => import('Cmpts/activitybar'));
const SideBar = React.lazy(() => import('Cmpts/sidebar'));
const TabList = React.lazy(() => import('Cmpts/tabs'));
const Editor = React.lazy(() => import('Cmpts/editor'));
const NotFound = React.lazy(() => import('Cmpts/notfound'));

const App = (props) => {
    const [theme, setTheme] = useLocalStorage('mode');
    const mode = theme === 'dark' ? Theme.dark : Theme.light;

    const Data = props.data;
    const keys = Object.keys(Data);
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
                <Suspense fallback={<LoadingChunks className="loading-chunks">Loading...</LoadingChunks>}>
                    <GlobalStyle />
                        <ForkMe />
                        <TitleBar title={props.title}/>
                    <Container>
                        <SideBarWrapper>
                            <ActivityBar 
                                socialLinks={props.socialLinks}
                                theme={theme}
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
                </Suspense>
            </Router>
        </ThemeProvider>
    )
}

export default App;