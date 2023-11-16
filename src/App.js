import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import SignIn from './SignIn';
import Cart from './Cart';
import Card from './Card';
const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/products' component={Products} />
  <Route exact path='/contact' component={Contact} />
  <Route exact path='/sign' component={SignIn} />

  <Route exact path='/cart' component={Cart} />
  <Route exact  path='/card/:id' component={Card}/>
</Switch>

    </BrowserRouter>
  </div>
);

export default App;
