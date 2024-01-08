// MyComponent.js
import { useState } from 'react';
import React from 'react';
import './style.css'
import { store } from '../Productlist/data'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import label from '../Assets/icons/icons8-label-32.png'
import Nav from '../navigation/navigation'
import {data} from '../Cart/data'


const MyComponent1 = () => {




  const { productId } = useParams();
  const product = store.find((product) => product.id == productId);



  // const [cart, setCart] = useState([]);

  // const onAddToCart = item => {
   
  //   const checkInCart = data.find((product) => product.id == productId);
  //   if(checkInCart != undefined)
  //   {
  //     console.log(checkInCart);
  
  //     data.push(checkInCart);
      
  //   }
  //   else{
  //     console.log("not present");
      
  //   }

  //   setCart(prevCart => [...prevCart, item]);
  // };

  





  
  const linkStyle = {
    textDecoration: 'none',
    // Add other styles as needed
  };
  const customStyle = {
    marginLeft: '70px',
    marginTop: '30px',
    marginTop:'20px'
  };

  const customStyle1 = {
    float: 'right',
    background: 'green',
    marginRight: '30px',
    marginTop: '30px',
    marginTop:'20px'
  };
  const customStyle2 = {
    fontWeight: 'bolder',
    fontSize: 'xx-large',
  };
  const customStyle3 = {
    height: '20px',
    fontSize: '20px'
  };

  const customStyle4 = {
    marginLeft: '10px',
    marginRight: '10px',
  };
  const customStyle5 = {
    border: '3px solid #f1f1f1',
  };



  return (

    <div style={{ backgroundColor: 'white' }}>

    <Nav ></Nav>
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div className="img-div" style={{ width: '30%' }}>
        <div>
          <img className="img-class" style={{ marginLeft: '0cm', maxWidth: '15cm', maxHeight: '15cm' }} src={product.img_path} alt="" />
        </div>
        <div>
          <Link to="/Cart" ><button className="button" style={customStyle} >GO TO CART</button></Link>
          
          <Link to="/Cooming" ><button className="button" style={customStyle1} >BUY NOW</button></Link>
        </div>
      </div>

      <div className="content-div" style={{
        display: 'inline', border: '1px solid rgb(11, 11, 11)', padding: '1rem 1rem',
        verticalAlign: 'middle',
        float: 'right',
        width: '60%',
        marginTop: '0.2cm',
        marginLeft: '3cm',
        float: 'right'
      }}>
        <h3 style={customStyle2}> {product.product_name}</h3>
        <br />
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star "></span> &nbsp;
        <span>2,16,004 Ratings & 254 Reviews</span>
        <br /><br />

        <ul>
          <li style={{ color: 'green' }}>{product.off}</li>
          <li style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{product.price} &nbsp; <del
            style={{ fontSize: 'medium', fontWeight: '100', color: 'green' }}>{product.del_price}</del></li>

          <li>{product.pack_fee}</li>
          <li style={{ fontWeight: 'bold' }}>{product.avl_off}</li>
          <li> <img style={customStyle3} src={label} alt="" /> &nbsp;<b>Bank
            Offer</b> Extra ₹750 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of ₹24,990 and
            aboveT&C</li>
          <li><img style={customStyle3} src={label} alt="" /> &nbsp;<b>Bank Offer</b>
            10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and aboveT&C</li>
          <li><img style={customStyle3} src={label} alt="" /> &nbsp;<b>Bank Offer</b>
            10% Instant Discount on SBI Credit Card Txns, up to ₹1000, on orders of ₹5,000 and aboveT&C</li>
          <li><img style={customStyle3} src={label} alt="" /> &nbsp;<b>Special
            Price</b> Get extra ₹8000 off (price inclusive of cashback/coupon)T&C</li>
        </ul>
        <br />
        <span class="heading">Rating & Rewiews</span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <p>4.1 average based on 254 reviews.</p>
        <hr style={customStyle5} />

        <div className="row" style={customStyle4}>
          <div className="side">
            <div>5 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-5"></div>
            </div>
          </div>
          <div className="side right">
            <div>150</div>
          </div>
          <div className="side">
            <div>4 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-4"></div>
            </div>
          </div>
          <div className="side right">
            <div>63</div>
          </div>
          <div className="side">
            <div>3 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-3"></div>
            </div>
          </div>
          <div className="side right">
            <div>15</div>
          </div>
          <div className="side">
            <div>2 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-2"></div>
            </div>
          </div>
          <div className="side right">
            <div>6</div>
          </div>
          <div className="side">
            <div>1 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-1"></div>
            </div>
          </div>
          <div className="side right">
            <div>20</div>
          </div>
        </div>

      </div>

    </div>
    </div>
  );

}

export default MyComponent1;
