
import React from 'react';

import Mainnav from '../navigation/navigation'
import Subnav from '../Nav2/Nav2bar'
import Products from '../Productlist/Productlist'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class MyComponent1 extends React.Component {
    render() {

        

        return (
            
                
               <div>
                <Mainnav/>
                <Subnav/>
                <Products/>
               </div>
              

           
            
       
        );
    }
}
export default MyComponent1;
