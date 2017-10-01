import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import Home from './home';
import UserDetail from './user_detail';
import UserItemGrid from './user_itemGrid';

const routes = (
      <Switch>
        <Route exact path ="/" component = {Home} />
        <Route path ="/user/:id" component = {UserDetail} />
        <Route path ="/user_itemGrid" component = {UserItemGrid} />
    </Switch>
        
);
export default routes;
