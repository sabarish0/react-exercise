import React, { Fragment } from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './userdetails';
import Sidebar from './sidebar';
import './style.css';
function User(){
  return(
    <Fragment>
      <Sidebar/>
      <div className="employee">
        <h2>Users</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>User name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              Users && Users.length > 0
              ?
              Users.map((item)=>{
                return(
                  <tr>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.Username}
                    </td>
                    <td>
                      {item.Password}
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
export default User;