import React from 'react';
import {BsCart3} from 'react-icons/bs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Nav,Navbar,NavDropdown,Button } from 'react-bootstrap';
const Bar = () => {
  return ( 
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Fabric store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/whitefabric" style={{color:'white'}}>Fabrics</Nav.Link>
            <Nav.Link href="/about" style={{color:'white'}}>About</Nav.Link>
          </Nav>
          {/*     <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark" className='me-4'>Search</Button>
              </Form> */}
          <Nav>
          <Nav.Link href="/admin" style={{color:'white'}}>Admin</Nav.Link>
          <Nav.Link href="/login" style={{color:'white'}}>Login</Nav.Link>
          <Nav.Link href="/register" style={{color:'white'}}>Register</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/cart"><BsCart3/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   );
}
 
export default Bar;