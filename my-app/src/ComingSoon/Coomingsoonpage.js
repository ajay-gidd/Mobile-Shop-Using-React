// MyComponent.js
import React from 'react';
import img from '../Assets/icons/icons8-buying-48.png'



import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
class MyComponent1 extends React.Component {
    render() {

        const containerStyle = {
            backgroundImage: '../Assets/Images/forestbridge.jpg',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
            color: 'white',
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '25px',
        };

        const topLeftStyle = {
            position: 'absolute',
            top: 0,
            left: '16px',
        };

        const bottomLeftStyle = {
            position: 'absolute',
            bottom: 0,
            left: '16px',
        };

        const middleStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
        };

        const hrStyle = {
            margin: 'auto',
            width: '40%',
        };

        return (

           <div>
         
                <div style={{ height: '100%',width:'100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                position: 'relative',
                color: 'white',
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: '25px',}}>
                    <img src='https://www.w3schools.com/w3images/forestbridge.jpg' style={{width:'100%'}}></img>
                    <div style={topLeftStyle}>
                        <Link to={'/'}><img src={img}></img></Link> 
                    </div>
                    <div style={middleStyle}>
                        <h1>COMING SOON</h1>
                        <hr />
                        <p>35 days left</p>
                        
                        <Link to={'/'} style={{textDecoration:'none'}}><p>GO TO HOME</p></Link>
                    </div>
                    <div style={bottomLeftStyle}>
                        <p>Some text</p>
                    </div>
                </div>
            </div>

           
        );
    }
}

export default MyComponent1;
