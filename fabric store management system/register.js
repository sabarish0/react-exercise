import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Bar from './head.js';
import './style.css';
const Reg = () => {
  const createUser = (event) =>{
      axios.post('http://localhost:27017/customers.customer',{
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      confirmpassword: event.target[4].value,
    })
  } 
    return ( 
        <div className='login'>
          <Bar/>
        <center>
        <Form className='container-form' onSubmit={createUser}>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
      <h4 className="mb-3">Signup</h4> <br/>
        <Form.Control type="text" className="acc" placeholder="Firstname" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname">
      <Form.Control type="text" className="acc" placeholder="Lastname" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" className="email" placeholder="Email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" className="pass" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" className="pass" placeholder="ConfirmPassword" required/>
      </Form.Group>
      <Button variant="dark" className="mb-3" type="submit">Submit</Button>
      <br/>
      <a href="/login">Back to login</a>
    </Form>
    </center>
    </div>
  );
}
 
export default Reg;