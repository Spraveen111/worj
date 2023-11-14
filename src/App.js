import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
