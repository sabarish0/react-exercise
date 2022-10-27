import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Allproducts = () => {
    return (
        <div>
        <center>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Fabric Products
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item ><Link to={'/whitefabric'}>White</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={'/colour'}>Coloured</Link></Dropdown.Item>
            <Dropdown.Item><Link to={'/printed'}>printed</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </center>
        </div>
    );
}
 
export default Allproducts;