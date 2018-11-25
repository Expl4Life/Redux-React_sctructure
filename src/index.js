import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router,  NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Main from './main';
import './index.css';

import reducers from './store/reducers';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <main>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}>
          <NavLink to='/reddit' className={'link'} activeClassName='link_active'>
            Reddit
          </NavLink>
          <NavLink to='/todo' className={'link'} activeClassName='link_active'>
            TODO
          </NavLink>
        </div>
        <div>
          <Main/>
        </div>
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
);
