// MyComponent.js
import React from 'react';
import '../Nav2/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
class MyComponent1 extends React.Component {
  render() {

    const myStyles = {
      display: 'flex',
    flexDirection: 'row',
    fontSize: 'larger',
    justifyContent: 'space-evenly'
    };

    return (

        <div>
        <nav class="flex-container"  style={myStyles}>
          
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Mobile Phone</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Headphone App</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Smart Watch</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Tablet</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Laptop</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Chargers</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Accessories</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Earbuds</Link></div>
            <div> <Link style={{ textDecoration: 'none' }} to='/Cooming'>Electronics</Link></div>
            
            
           
            
            
           
           

        </nav>
        <hr/>

    </div>
    );
  }
}

export default MyComponent1;
