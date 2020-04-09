import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './assets/styles/App.css';

import Ops from './pages/Ops';
import Home from './pages/Home';
import Why from './pages/Why';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/porque" component={Why} />
        <Route path="/informacoes" component={Info} />
        <Route component={Ops} />
      </Switch>
    </div>
  );
}

export default App;
