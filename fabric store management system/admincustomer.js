import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from './customerdetails';
import Sidebar from './sidebar';
import './style.css';
function Customer(){
  return(
    <Fragment>
      <Sidebar/>
      <div className="employee">  
        <h2>Customers</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              Customers && Customers.length > 0
              ?
              Customers.map((item)=>{
                return(
                  <tr>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.Fname}
                    </td>
                    <td>
                      {item.Lname}
                    </td>
                    <td>
                      {item.Email}
                    </td>
                  </tr>
               )
              })
              :
              "No data available"
            }
          </tbody>
        </Table>
        <br/>
      </div>
    </Fragment>
  )
}
export default Customer;