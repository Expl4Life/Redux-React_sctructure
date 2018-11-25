import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Reddit from './models/Reddit';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/reddit" component={Reddit} />
          <Route path="/todo" render={() => <h1 style={{textAlign: 'center'}}>TODO App</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Main;
