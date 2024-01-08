// MyComponent.js
import React from 'react';
import '../navigation/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from '../Cart/CartPage'
import { BrowserRouter as Router, Route, browserHistory, IndexRoute, Link } from 'react-router-dom';
class MyComponent1 extends React.Component {
  render() {

    const myStyles = {
      fontFamily: 'Verdana',
      fontWeight: '900',
      fontSize: 'x-large',
      textDecoration: 'none',
    };

    return (

      <div >

         <div class="div-nav1" >
        <nav class="flex-container" >
          <div>
            <Link class="logo-name" style={myStyles}  to='/'>MEESHO</Link>
          </div>
          <div class="input-group">

            <input id="search-focus" type="search" class="form-control"
              placeholder="Search Here" />

          </div>
          <div>
           <Link style={{ textDecoration: 'none' }} to='/Cooming'>Download App</Link></div> |
          <div>
          <Link style={{ textDecoration: 'none' }} to='/Cooming'>Become a Supplier</Link>
          </div> |

          <div>
           
            <Link style={{ textDecoration: 'none' }} to='/Cooming'>Newsroom</Link>

          </div> |
          <div>
            
            <Link style={{ textDecoration: 'none' }} to='/Profile'>Profile</Link>

          </div> |
          <div>
            <Link style={{ textDecoration: 'none' }} to='/Cart'>Cart</Link>
          
           </div>

        </nav>
        

      </div>
      
      <hr/>
    
      </div>   
      

    );
  }
}

export default MyComponent1;
