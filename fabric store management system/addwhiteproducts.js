import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {FiArrowLeftCircle} from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import {v4 as uuid} from "uuid";
import Sidebar from './sidebar';
import { Link,useNavigate } from 'react-router-dom';
import './style.css';
function Addwhiteproducts(){
  const[title,setTitle] = useState('');
  const[image,setImage] = useState('');
  const[price,setPrice] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=title;
        let b=image;
        let c=price;
        Whiteproducts.push({id: uniqueId, Title: a, Image: b, Price: c})
        history("/adminwhite")
  }
  return(
    <><Sidebar/>
    <div className='employee'> 
        <Form className="d-grid gap-2">
        <Link to={'/adminwhite'}>
                <FiArrowLeftCircle/>
          </Link>
          <h2>Add Products</h2>
        <br/>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type="text" value={title} className="name" placeholder="Product name" onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <span>Choose product image</span>
          <Form.Control type="file" value={image} className="image" placeholder="Choose product image" onChange={(e) => setImage(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Control type="text" value={price} className="price" placeholder="Product price" onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>
        <Button variant="dark" className="mb-3" type="submit" onSubmit={(e)=>handleSubmit(e)}>Submit</Button>
        <br/>
     </Form>        
    </div>
    </>
  )
}
export default Addwhiteproducts;