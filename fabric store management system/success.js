import React from 'react';
import Bar from './head.js';
import './style.css';
const Success = () => {
    return ( 
        <div className='success'>
            <Bar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <center><h3>Your order is placed successfully</h3></center>
        </div>
     );
}
 
export default Success;