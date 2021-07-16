import React from 'react';
import { lazily } from 'react-lazily';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
const { NavBar } = lazily(() => import('./components/NavBar'));
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
              <Route exact path="/gameslist" component={GamesList} />
              <Route exact path="/submissions" component={null} />
              <Route exact path="/faq" component={null} />
              <Route exact path="/contact" component={null} />
              <Route exact path="/about" component={null} />
              <Route exact path="/login" component={null} />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  );
};
