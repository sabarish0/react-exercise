import React, { useState, Fragment, useEffect } from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap';
import {BiRupee} from 'react-icons/bi';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartitems from './cartitem';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Bar from './head.js';
import './style.css';
function Cart(){
  const[total,setTotal]=useState();
   let history= useNavigate();
   
  const handleDelete = (id) =>{
    setTotal(0)
    var index=Cartitems.map(function(e){
        return e.id
    }).indexOf(id);
    Cartitems.splice(index,1);

    history('/cart');
  }

  const[count,setCount] = useState(100);
  const length = Cartitems.length;
  console.log(length)
  return(
    <Fragment>
        <div className='cart'>
        <Bar/>
            <h2 className='urcart'>Your Cart - {length} item</h2>
            <div className='card-cart'>
                {
                    Cartitems && Cartitems.length > 0 
                     ?
                     Cartitems.map((item) =>
                     {
                      const handleEdit = (e) =>{
                        Cartitems.map((item) => (
                            Cartitems.push({Name: item.Name, Image: item.Image, Price: item.Price,Count: item.Count, Category: item.Category,Total: item.Total})
                            ))
                            history("/checkout")
                      }
                      const decrease = (count) =>{
                        setCount(count-1)
                        setTotal(total-300)
                        }
                                          
                        const increase = (count) =>{
                          setCount((item.Count)+1)
                          setTotal(total+300)
                        }
                        return(
                         <div>
                        <Container> 
                        <Card>
                        <Row>
                        <Col>
                              <img src={item.Image} height="200px" width="200px"/>
                        </Col>
                        <Col>
                          <h3>{item.Name}</h3><br/>
                          <Button variant="dark" onClick={() => decrease(item.Count)} disabled={item.Count == 100}>-</Button>
                            <input type="number" value={item.Count} />
                          <Button variant="dark" onClick={() => increase(item.Count)} disabled={item.Count == 500}>+</Button><br/>
                          <h6>Category: {item.Category}</h6>
                          <h6><BiRupee/>{item.Total}</h6>
                          <Button variant="dark" onClick={() => handleDelete(item.id)}>Delete</Button>
                          <Link to ="/checkout">
                            <Button variant='dark' onChange={(e)=>handleEdit(e)}>Checkout</Button>
                          </Link>
                          </Col>
                         </Row>
                       </Card>
                     </Container>
                    </div>
                    )
                     })
                     :
                     "no data available"
                    }
            </div>
        </div>
    </Fragment>
  )
}
export default Cart;