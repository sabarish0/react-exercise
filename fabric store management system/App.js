import React from 'react';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './home.js';
import Log from './login.js';
import Success from './success.js';
import Home1 from './home1.js';
import Search from './search.js';
import Reg from './register.js';
import Cart from './cart.js';
import White from './whitefabric.js';
import Productview from './productview.js';
import About from './about.js';
import Checkout from './checkout2.js';
import Product from './colour.js';
import Printedproduct from './printed.js';
import Buy from './buy.js';
import Addemployee from './addemployee';
import Editemployee from './editemployee';
import Employee from './adminemployee';
import Customer from './admincustomer';
import User from './adminuser';
import Addwhiteproducts from './addwhiteproducts'
import Sal from './empsal';
import Adminproducts from './adminproducts';
import Adminprinted from './adminprinted';
import Admincolor from './admincolor';
import Adminwhite from './adminwhite';
function App() {
  return (   
    <div>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Log/>} />
            <Route path={'/about'} element={<About/>} />
            <Route path={'/register'} element ={<Reg/>} />
            <Route path={'/whitefabric'} element ={<White/>} />
            <Route path={'/productview'} element ={<Productview/>} />
            <Route path={'/colour'} element ={<Product/>} />
            <Route path={'/search'} element ={<Search/>} />
            <Route path={'/printed'} element ={<Printedproduct/>} />
            <Route path={'/cart'} element ={<Cart/>} />
            <Route path={'/buy'} element ={<Buy/>} />
            <Route path={'/checkout'} element ={<Checkout/>} />
            <Route path={'/success'} element ={<Success/>} /> 
            <Route path={'/admin'} element ={<Home1/>} /> 
            <Route path={'/employee'} element={<Employee/>} />
            <Route path={'/editemployee'} element={<Editemployee/>} />
            <Route path={'/addemployee'} element={<Addemployee/>} />
            <Route path={'/customer'} element={<Customer/>} />
            <Route path={'/user'} element={<User/>} />
            <Route path={'/addwhiteproducts'} element={<Addwhiteproducts/>} />
            <Route path={'/employeewages'} element={<Sal/>} />
            <Route path={'/adminproducts'} element={<Adminproducts/>} />
            <Route path={'/adminprinted'} element={<Adminprinted/>} />
            <Route path={'/adminwhite'} element={<Adminwhite/>} />
            <Route path={'/admincolor'} element={<Admincolor/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
