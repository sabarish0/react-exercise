import React from 'react';
import Whiteproducts from './whiteproducts';
import { Table,Button } from 'react-bootstrap';
import { Fragment } from 'react';
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

const Adminwhite = () => {
  let history= useNavigate();

  const handleDelete = (id) =>{
    var index=Whiteproducts.map(function(e){
        return e.id
    }).indexOf(id);
    Whiteproducts.splice(index,1);
    
    history('/adminwhite');
  }
    return ( 
            <Fragment>
              <Sidebar/>
              <div className="employee">
              <Link to={'/adminproducts'}>
                <FiArrowLeftCircle/>
               </Link>
                <h2>White Fabrics</h2>
                <Link to = '/addwhiteproducts'>
                  <Button variant='dark'>Add product</Button>
                </Link>
                <br/>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Whiteproducts && Whiteproducts.length > 0
                      ?
                      Whiteproducts.map((item)=>{
                        return(
                          <tr>
                            <td>
                              {item.id}
                            </td>
                            <td>
                              {item.Name}
                            </td>
                            <td>
                              <img src={item.Image} height='80px' width='70px' Fixed/>
                            </td>
                            <td>
                              {item.Price}
                            </td>
                            <td>
                             <Button variant="dark" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                          </tr>
                       )
                      })
                      :
                      "No data available"
                    }
                  </tbody>
                </Table>
              </div>
            </Fragment>
          )
}
 
export default Adminwhite;