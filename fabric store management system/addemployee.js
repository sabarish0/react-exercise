import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employeedetails';
import {v4 as uuid} from "uuid";
import Sidebar from './sidebar';
import {Link, useNavigate} from 'react-router-dom'
import './style.css'
import {FiArrowLeftCircle} from "react-icons/fi";

function Addemployee(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[num,setNum]=useState('');
    const[city,setCity]=useState('');

    let history = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=name;
        let b=age;
        let c=num;
        let d=city;

        Employees.push({id: uniqueId, Name: a, Age: b, Num: c,City: d})
        history("/employee")
    }
    return(
        <>
        <Sidebar/>
        <div className='employee'>
            
            <Link to={'/employee'}>
            <FiArrowLeftCircle/>
            </Link>
            <h3>Add new employee</h3>
            <Form className="d-grid gap-2">
                <Form.Group className='mb-3' controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formNum">
                    <Form.Control type="text" placeholder="Enter Phone number" required onChange={(e) => setNum(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formNum">
                    <Form.Control type="text" placeholder="Enter City" required onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button variant="dark" onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
        </>
    )
}
export default Addemployee;