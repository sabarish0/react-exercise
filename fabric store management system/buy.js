import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkoutitems from './checkouts';
import {BiRupee} from 'react-icons/bi';
import './style.css';
import Bar from './head.js';
import { Table, Row, Col, Form, Container, Button } from 'react-bootstrap';
function Buy(){
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
    const[gst,setGst] = useState();
    const[sub,setSub]=useState();
    const[total,setTotal]=useState();
    const[category,setCategory]=useState("");
    const[id,setId]=useState("");

    let history= useNavigate();
    const handleDelete = (id) =>{
      var index=Checkoutitems.map(function(e){
          return e.id
      }).indexOf(id);
      Checkoutitems.splice(index,1);
      history('/buy');
    }
    
    const handlePrice = () =>{
        let ans=0
        let gs=0
        Checkoutitems.map((item) => (
          ans = ans+item.Total,
          gs+=(item.Total*18)/100),
          )
        let tot=ans+gs;
        setTotal(tot)
    }
    useEffect(() =>{
        handlePrice();
    }); 
    const length = Checkoutitems.length;
    console.log(length)
    const totalgst=(length*gst)
    return(
        <div className='buy'>
          <Bar/>
            <Container> 
                <Row>
                  <Col>
                    <Form className='checkout-form'>
                    <h3>Shipping information</h3>
                    <h5>page 1</h5>
                   <Form.Group className="mb-3" controlId="formBasicFirstName">
                   <Form.Control type="text" placeholder="First Name" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicLastName">
                   <Form.Control type="text" placeholder="Last Name" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control type="text" placeholder="Email" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicAddress">
                   <Form.Control type="text" placeholder="Address" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicCity">
                   <Form.Control type="text" placeholder="City" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPincode">
                   <Form.Control type="text" placeholder="Pin Code" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                   <Form.Control type="text" placeholder="Phone number" />
                   </Form.Group>
                   <Button variant="dark" className="mb-3" type="submit">Continue with payment</Button>
                   </Form>
                  </Col>
                  <Col>      
                  <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>GST(18%)</th>
                      <th>Total price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Checkoutitems && Checkoutitems.length > 0
                      ?
                      Checkoutitems.map((item)=>{
                        return(
                          <tr>
                            <td>
                              {item.Name}
                            </td>
                            <td>
                              {item.Count}
                            </td>
                            <td>
                              {item.Category}
                            </td>
                            <td>
                              <BiRupee/>{item.Total}
                            </td>
                            <td><BiRupee/>{(item.Total)*18/100}</td>
                            <td><BiRupee/>{(item.Total)+(item.Total)*18/100}</td>
                            <td><Button variant="dark" onClick={() => handleDelete(item.id)}>Delete</Button></td>
                          </tr>
                       )
                      })
                      :
                      "No data available"
                    }
                    </tbody>
                   </Table> 
                      <div className='price'>
                       <h2> Subtotal : <BiRupee/>{total}</h2>
                    </div>
                  </Col> 
                    
          </Row>
        </Container>
        </div>
    )
}
export default Buy;