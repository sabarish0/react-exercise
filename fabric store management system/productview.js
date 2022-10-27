import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Checkoutitems from './checkouts';
import {BiRupee} from 'react-icons/bi';
import {v4 as uuid} from "uuid";
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Bar from './head.js';
import './style.css'
import Cartitems from './cartitem';

function Productview(){
    const[count,setCount] = useState(100);
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState('');
    const[total,setTotal]=useState(300);
    const[id,setId]=useState("");
    const[category,setCategory]=useState("");
    
    let history = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=name;
        let b=image;
        let c=price;
        let d=count;
        let f=category;
        let g=total;

        Cartitems.push({id: uniqueId, Name: a, Image: b, Price: c,Count: d, Category: f,Total: g})
        history("/cart")
    }

    const handleEdit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=name;
        let b=image;
        let c=price;
        let d=count;
        let f=category;
        let g=total;

        Checkoutitems.push({id: uniqueId, Name: a, Image: b, Price: c, Count: d, Category: f,Total: g})
        history("/buy")
    }
    const decrease = (count) =>{
        setCount(count-1)
        setTotal(total-300)
    }

    const increase = (count) =>{
        setCount(count+1)
        setTotal(total+300)
    }

    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setImage(localStorage.getItem('Image'))
        setPrice(localStorage.getItem('Price'))
        setCategory(localStorage.getItem('Category'))
    },[])
    console.log(count)
    console.log(price)
    return(
        <div>
            <Bar/>
            <Row>
                <Col>
                    <img src={image} height='450px' width='400px' className='productimg'></img>
                </Col>
                <Col>
                <div className='productdetail'>
                    <h2>{name}</h2>
                    <h4><BiRupee/>{total}</h4><br/>
                    <h6>category: {category}</h6><br/><br/>
                    <h6>metre</h6>
                    <Button variant="dark" onClick={()=>decrease(count,price)} disabled={count == 100}>-</Button>
                    <input type="number" value={count} />
                    <Button variant="dark" onClick={()=>increase(count,price)} disabled={count == 500}>+</Button><br/><br/>
                    <Link to = {'/cart'}>
                      <Button variant="dark" onClick={(e) => handleSubmit(e)}>Add to cart</Button>  
                    </Link>
                    <Link to={'/buy'}>
                        <Button variant="dark" onClick={(e) => handleEdit(e)}>Checkout</Button>
                    </Link><br/><br/>
                </div>
                </Col>
            </Row>
        </div>
    )
}
export default Productview;




