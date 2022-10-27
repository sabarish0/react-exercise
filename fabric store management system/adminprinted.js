import React from 'react';
import Printedproducts from './printedproducts';
import { Table,Button } from 'react-bootstrap';
import { Fragment } from 'react';
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

const Adminprinted = () => {
  let history= useNavigate();

  const handleDelete = (id) =>{
    var index=Printedproducts.map(function(e){
        return e.id
    }).indexOf(id);
    Printedproducts.splice(index,1);
    
    history('/adminprinted');
  }
    return ( 
            <Fragment>
              <Sidebar/>
              <div className="employee">
               <Link to={'/adminproducts'}>
                <FiArrowLeftCircle/>
               </Link>
                <h2>Printed Fabrics</h2>
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
                      Printedproducts && Printedproducts.length > 0
                      ?
                      Printedproducts.map((item)=>{
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
 
export default Adminprinted;