//MyComponent.js
// import React from 'react';
// import img from './img/apple-14.jpg'
// import plus from "./img/plus.png"
// import minus from "./img/minus.png"
import style from './style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { data } from "./data"
// class CartPage extends React.Component {
//     render() {
//         const myStyle = {
//             height: '2cm',
//             width: '1.5cm',
//             marginLeft: '1px',
//         };


//         return (

//             <div class="shopping-cart">

//                 <div class="title">
//                     Shopping Bag
//                 </div>

//                 {data.map((product) =>(
//                 <div class="item">
//                     <div class="buttons">
//                         <span class="delete-btn"></span>
//                         <span class="like-btn"></span>
//                     </div>

//                     <div class="image">
//                         <img style={myStyle} src={img} alt={product.imgUrl} />
//                     </div>

//                     <div class="description">
//                         <span>{product.Name}</span>

//                         <span>{product.Color}</span>
//                     </div>

//                     <div class="quantity">
//                         <button class="plus-btn" type="button" name="button">
//                             <img src={plus} alt="" />
//                         </button>
//                         <input type="text" name="name" value={product.Quantity} />
//                         <button class="minus-btn" type="button" name="button">
//                             <img src={minus} alt="" />
//                         </button>
//                     </div>

//                     <div class="total-price">&#8377; {product.Price}</div>
//                 </div>))}




//             </div>


//         );
//     }
// }

//  export default CartPage;

import React, { useState } from "react";
import { data } from './data';

const Cart = () => {
    const [cart, setCart] = useState(data);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
    };

    const handleQuantityChange = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <div className="container mt-4" style={{ boxShadow:'3px 4px 8px 0 rgba(0,0,0,0.2)', transition:'0.3s', borderRadius:'7px'}} >

            <div class="title" style={{ textAlign: 'center', fontSize: '30px', marginBottom: '0.7cm', marginTop:'0.5cm' }}>Shopping Bag</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img
                                    src={item.imgUrl}
                                    alt={item.Name}
                                    style={{ width: "50px", height: "65px" }}
                                />
                            </td>
                            <td>{item.Name}</td>
                            <td>&#8377;{item.Price}</td>
                            <td>
                                <select
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, parseInt(e.target.value, 10))
                                    }
                                >
                                    {[1, 2, 3, 4, 5].map((quantity) => (
                                        <option key={quantity} value={quantity}>
                                            {quantity}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>&#8377;{item.Price * item.quantity}</td>
                            <td>{item.date}</td>
                            <td>
                                <button
                                    className="" style={{ padding: '7px', marginLeft: 0, backgroundColor: 'rgb(217, 43, 92)', color: 'white', borderRadius: '7px', border: 'none', fontSize: '15px', width: '2.5cm' }}
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ textAlign: 'right' }}>
                <h4>Total: &#8377;{calculateTotal()}</h4>
            </div>
        </div>
    );
};

export default Cart;
