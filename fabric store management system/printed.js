import React,{Fragment,useState} from 'react';
import Printedproducts from './printedproducts';
import Allproducts from './products';
import {v4 as uuid} from "uuid";
import { Link,useNavigate } from 'react-router-dom';
import Cartitems from './cartitem';
import {BiRupee} from 'react-icons/bi';
import Bar from './head.js';
import {Row,Col,Container,Card,Button} from 'react-bootstrap';
function Printedproduct(){
    const[count,setCount] = useState(100);
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
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
        let d=category;

        Cartitems.push({id: uniqueId, Name: a, Image: b, Price: c, Category: d})
        history("/cart")
    }

        const handleEdit = (id, name,image,price,category) =>{
            localStorage.setItem('Name',name)
            localStorage.setItem('Image',image)
            localStorage.setItem('Price',price)
            localStorage.setItem('Id',id)
            localStorage.setItem('Category',category)
          }

        return(
            <Fragment>
            <div>
            <Bar/>
            <br/><br/><br/>
             <Allproducts/>
             <center><h3>Printed fabric</h3></center>
                <div className="colour">
                    {
                        Printedproducts && Printedproducts.length > 0
                        ?
                        Printedproducts.map((item)=>{
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
export default Printedproduct;