import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { GlobalStyle, SideBarWrapper, Container, ContentWrap } from "Styles/globalStyle";
import TitleBar from 'Cmpts/titlebar';
import ActivityBar from 'Cmpts/activitybar';
import SideBar from 'Cmpts/sidebar';
import TabList from 'Cmpts/tabs';
import Editor from 'Cmpts/editor';
import NotFound from 'Cmpts/notfound';

export const App = (props) => {
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
        <Router>
            <GlobalStyle />
            <TitleBar />
            <Container>
                <SideBarWrapper>
                    <ActivityBar />
                    <SideBar />
                </SideBarWrapper>
                <ContentWrap>
                    <TabList />
                    <Switch>
                        {routePaths}
                        <Redirect exact from="/" to="intoduction" />
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </ContentWrap>
            </Container>
        </Router>
    )
}
