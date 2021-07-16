import React from 'react';
import { lazily } from 'react-lazily';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
const { NavBar } = lazily(() => import('./components/NavBar'));
const { Home } = lazily(() => import('./pages/Home'));
const { Browse } = lazily(() => import('./pages/Browse'));
const { Error404 } = lazily(() => import('./pages/Error404'));
const history = createBrowserHistory();

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="App">
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/browse" component={Browse} />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
};
