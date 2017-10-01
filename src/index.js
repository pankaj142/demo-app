import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserDetail from './components/user_detail';
import Home from './components/home';
import UserItemGrid from './components/user_itemGrid'
import routes from './components/routes';

ReactDOM.render(
    <Router history={history}>
        {routes}
    </Router>,
   document.querySelector('.container'));