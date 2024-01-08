import React, { useState, useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { store } from "./data";
import { Link } from 'react-router-dom';


const ProductCard = () => {
  const myStyles = {
    fontWeight: 'bolder',
    color: 'black',
    fontSize: 'x-large',
    textDecoration: 'none',
  };
 
  const div2 = {
    // Define styles for div2 if needed
    //float: 'left',
    padding: '30px',
    fontSize: '14px',
  };

  const insidediv1 = {
    // Define styles for insidediv1 if needed
    fontWeight: '1000',
    fontSize: 'large',
    marginTop: '20px'
  };

  const insidediv2 = {
    // Define styles for insidediv2 if needed
    fontWeight: 'bold',
    color: 'green',
    fontSize: '16px',
  };
  const insidediv2_q = {
    // Define styles for insidediv2 if needed
    fontWeight: 'bold',
    color: 'red',
    fontSize: '16px',
  };

  const productMain = {
    // Define styles for insidediv2 if needed
    //backgroundColor: 'white'
  };
  const details = {
    // Define styles for insidediv2 if needed
    //backgroundColor: 'white'
    listStyleType:'disc'
    
  };

  return (
    
   // {
    store.map((product) => (
        <div style={productMain}>
          <div >

            <div className="float-child">
              <div className="float-child1">
                <img className="img-class" src={product.img_path} alt={product.img_path} />
              </div>
              <div className="float-child1">
              
                
                <Link style={myStyles} to={`/Product/${product.id}`}>{product.product_name}</Link>
                <br />
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span> &nbsp;
                <span>{product.ratings }</span>
                <br />
                <br />
                <ul className="ul-element" style={details}>
                  <li>{product.ram }</li>
                  <li>{product.display }</li>
                  <li>{product.camera }</li>
                  <li>{product.battery }</li>
                  <li>{product.processor }</li>
                  <li>{product.warrenty }</li>
                </ul>


              </div>
              <div style={div2}>
                <span style={insidediv1}>&#8377; {product.price }</span>
                <br />
                <br />
                <span style={{}}>{product.delivery_type }</span> <br/>
                <span style={insidediv2_q}>{product.quantity }</span><br/>
                <span style={insidediv2}>{product.bank_offer }</span><br/>
                
                <span style={{}}>{product.exchange }</span>
              </div>
            </div>
          </div>
        </div>
      ))
   // }


  );


};

export default ProductCard;




