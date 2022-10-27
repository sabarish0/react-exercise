import React,{useState} from 'react';
import { Fragment } from 'react';
import { Table,Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employeedetails';
import Sidebar from './sidebar';

const Sal = () => {
    return ( 
        <Fragment>
          <Sidebar/>
        <div className="employee">
        <h2>Employees wages</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Attendence</th>
              <th>no of days</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item)=>{
                const[count,setCount] = useState(1);
                const[sal,setSal] = useState(400);
                const increase = (count,sal) =>{
                      setCount(count+1)
                      setSal(sal+400)
                }
                const decrease = (count,sal) =>{
                      setCount(count-1)
                      setSal(sal-400)
                }
                return(
                  <tr>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      {item.Name}
                    </td>
                    <td> 
                      <Button variant="success" style={{size:'3px 3px'}} onClick={()=>increase(count,sal)}>present</Button>
                      <Button variant="danger"  onClick={()=>decrease(count,sal)} disabled={count === 1}>absent</Button>
                    </td>
                    <td>
                        <h5>{count}</h5>
                    </td>
                    <td>
                        <h5>{sal}</h5>
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
     );
}
 
export default Sal;