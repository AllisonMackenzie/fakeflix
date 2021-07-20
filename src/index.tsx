import React, { Suspense } from 'react';
import { lazily } from 'react-lazily';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { NavBar } from './components/NavBar';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { GlowLoader } from './components/GlowLoader';
const { Auth } = lazily(() => import('./pages/Auth'));
const { Browse } = lazily(() => import('./pages/Browse'));
const { Error404 } = lazily(() => import('./pages/Error404'));

ReactDOM.render(
  <React.Fragment>
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<GlowLoader />}>
          <Provider store={store}>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/browse" component={Browse} />
              <Route component={Error404} />
            </Switch>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
