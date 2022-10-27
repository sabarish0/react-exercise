import React, { Fragment,useState} from 'react';
import Allproducts from './products';
import Whiteproducts from './whiteproducts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {BiRupee} from 'react-icons/bi';
import {v4 as uuid} from "uuid";
import Cartitems from './cartitem';
import { Card,Button, Container, Row, Col } from 'react-bootstrap';
import Bar from './head.js';
import './style.css';
const  White= () => {
    const[count,setCount] = useState(100);
    const[name,setName]=useState('');
    const[image,setImage]=useState('');
    const[price,setPrice]=useState('');
    const[id,setId]=useState('');
    const[category,setCategory]=useState('');
    
    let history = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,1);
        let a1=name;
        let b1=image;
        let c1=price;
        let d1=category;
        Cartitems.push({ Id:uniqueId, Name: a1, Image: b1, Price: c1,Category: d1})
        console.log(Cartitems)
        history("/cart")
    }
    const handleEdit = (id,name,image,price,category) =>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Image',image)
        localStorage.setItem('Price',price)
        localStorage.setItem('Id',id)
        localStorage.setItem('Category',category)
      }
    return ( 
      <Fragment>
      <div>
      <Bar/>
      <br/><br/><br/>
        <Allproducts/>
        <center><h3>White fabric</h3></center>
          <div className="colour">
              {
                  Whiteproducts && Whiteproducts.length > 0
                  ?
                  Whiteproducts.map((item)=>{
                      return(
                          <Row>
                          <Col>
                           <Container> 
                          <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" src={item.Image} Fixed/>
                          <Card.Body>
                          <center>
                          <Card.Title>{item.Name}</Card.Title>
                          <Card.Text>
                              <h6>Category: {item.Category}</h6>
                              <h6><BiRupee/>{item.Price}</h6><br/>
                              <Link to={'/productview'}>
                              <Button variant="dark" onClick={() => handleEdit(item.id, item.Name,item.Image,item.Price,item.Category)}>Buy now</Button>
                              </Link>
                              
                              <br/>
                          </Card.Text>
                          </center>
                          </Card.Body>
                          </Card>
                          </Container>
                          </Col>
                          </Row>
                      )
                  })
                  :
                  "No data available"
              }
          </div>
      </div>
      </Fragment>
    )
}
export default White   