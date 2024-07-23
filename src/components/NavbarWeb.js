import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap'

function NavbarWeb() {
  return (
    <div className='sticky-top'>
    <Navbar data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
        <Image src="assets/img/logo.png" width="130" className='mr-2'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="#about" className='mx-2'>About Us</Nav.Link>
            <Nav.Link href="#services" className='mx-2'>Our Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarWeb;