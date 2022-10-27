import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Sidebar from './sidebar';

const Adminproducts = () => {
    return(
    <>
    <Sidebar/>
        <div className='products'>
            <h2>Products</h2>
            <Link to='/adminwhite'>
                <h6>1.White fabric</h6>
            </Link>
            <Link to='/admincolor'>
                <h6>2.Color fabric</h6>
            </Link>
            <Link to='/adminprinted'>
                <h6>3.Printed fabric</h6>
            </Link>
        </div>
        </>
    )
}
 
export default Adminproducts;