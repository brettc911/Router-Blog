import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// STYLES:
import './style/index.css';

// COMPONENETS:
import App from './components/App';
import ShowPost from './components/ShowPost';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import BaseLayout from './components/BaseLayout';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/create' component={CreatePost} />
        <Route path='/list/:id' component={ShowPost} />
        <Route path='/list' component={PostList} />
        <Route path='/' component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
