import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'

function NavbarWeb() {
  return (
    <div className='sticky-top'>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="assets/img/logo.png" width="135" className='mr-2' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown" className='mx-2'>
                <NavDropdown.Item href="#about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#more">More</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#prinsip" className='mx-2'>Our Principle</Nav.Link>
              <Nav.Link href="#services" className='mx-2'>Our Services</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarWeb;