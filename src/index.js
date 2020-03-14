import React from 'react';
import { render } from "react-dom";
import { App } from './containers/app';
import { Resume, SocialLinks } from './data';

render(
    <App 
        data= {Resume} 
        socialLinks= {SocialLinks}
    />, 
    document.getElementById('root')
);