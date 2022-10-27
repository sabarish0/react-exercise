import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employeedetails';
import {Link,useNavigate} from 'react-router-dom'
import Sidebar from './sidebar';
import './style.css';
function Employee(){
  let history= useNavigate();

  const handleDelete = (id) =>{
    var index=Employees.map(function(e){
        return e.id
    }).indexOf(id);
    Employees.splice(index,1);
    
    history('/employee');
  }

  const handleEdit = (id, name, age, city, num) =>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)
    localStorage.setItem('City',city)
    localStorage.setItem('Num',num)
  }
  return(
    <Fragment>
      <Sidebar/>
      <div className="employee"> 
        <h2>Employees</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Number</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item)=>{
                return(
                  <tr>
                    <td>
                      {item.Name}
                    </td>
                    <td>
                      {item.Age}
                    </td>
                    <td>
                      {item.Num}
                    </td>
                    <td>
                      {item.City}
                    </td>
                    <td>
                      <Link to={'/editemployee'}>
                      <Button variant="dark" onClick={() => handleEdit(item.id, item.Name, item.Age,item.City, item.Num)}>Edit</Button>
                      </Link>
                      &nbsp;
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
        <br/>
        <Link to="/Addemployee">
          <Button variant="dark" size="lg">Add new employee</Button>
        </Link>
      </div>
    </Fragment>
  )
}
export default Employee;