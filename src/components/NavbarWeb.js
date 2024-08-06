import React from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function NavbarWeb() {
  return (
    <div className='sticky-top'>
      <Navbar expand="lg" data-bs-theme="light" className='me-auto shadow'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src="assets/img/Logo Zerphius Final.png" width="100" className='mr-2' />
            <span className="brand-text">FUTURE AI TECHNOLOGY</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">          
              <NavDropdown title="MORE INFO" id="basic-nav-dropdown" className='mx-2 text-end text-black ' style={{ fontFamily: "Poppins" }}>
                <Nav.Link href="#more" className='mx-2 text-center text-black' style={{ fontFamily: "Poppins" }}>VISION & MISSION</Nav.Link>
                <Nav.Link href="#about" className='mx-2 text-center text-black' style={{ fontFamily: "Poppins" }}>ABOUT</Nav.Link>
                <Nav.Link href="#services" className='mx-2 text-center text-black' style={{ fontFamily: "Poppins" }}>OUR SERVICES</Nav.Link>
                <Nav.Link href="#catalog" className='mx-2 text-center text-black' style={{ fontFamily: "Poppins" }}>OUR PRODUCT</Nav.Link>
              </NavDropdown>
              <Nav.Link as={Link} to="/" className='mx-2 fw-bold text-end text-black' style={{ fontFamily: "Poppins" }}>
                <i className="fa-solid fa-house"></i> HOME
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProgressBar />
    </div>
  );
}

export default NavbarWeb;
