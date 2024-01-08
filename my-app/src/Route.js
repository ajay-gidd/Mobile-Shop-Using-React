// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Cart/CartPage';
//import About from './About';
//import Contact from './Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
