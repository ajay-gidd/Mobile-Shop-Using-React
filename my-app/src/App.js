
import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Link, Routes, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Cartpage from './Pages/Cart'
import Profilepage from './Pages/Profilepage'
import Product from './ProductDetails/Product'
import Cooming from './ComingSoon/Coomingsoonpage'

class App extends React.Component {
  render() {

    return (


      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='Cart' element={<Cartpage />} />
          <Route path='Profile' element={<Profilepage />} />
          <Route path='/Product/:productId' element={<Product />} />
          <Route path='Cooming' element={<Cooming />} />
        </Routes>
      </div>



    );
  }
}

export default App;
