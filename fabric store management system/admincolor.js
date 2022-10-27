import React from 'react';
import Products from './colorproducts';
import { Table,Button } from 'react-bootstrap';
import { Fragment } from 'react';
import {FiArrowLeftCircle} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

const Admincolor = () => {
  let history= useNavigate();

  const handleDelete = (id) =>{
    var index=Products.map(function(e){
        return e.id
    }).indexOf(id);
    Products.splice(index,1);
    
    history('/admincolor');
  }

  const handleEdit = (id, name, age, city, num) =>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)
    localStorage.setItem('City',city)
    localStorage.setItem('Num',num)
  }
    return ( 
            <Fragment>
              <Sidebar/>
              <div className="employee">
              <Link to={'/adminproducts'}>
                <FiArrowLeftCircle/>
               </Link>
                <h2>Color Fabrics</h2>
                <Button variant="dark" onClick={() => handleEdit(item.id)}>Delete</Button>
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
                      Products && Products.length > 0
                      ?
                      Products.map((item)=>{
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
 
export default Admincolor;