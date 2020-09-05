import React from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/posts'>
          <Posts></Posts>
        </Route>
        <Route path='/post/:selectId'>
          <PostDetail></PostDetail>
        </Route>
        <Route exact path='/'>
          <Posts></Posts>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
