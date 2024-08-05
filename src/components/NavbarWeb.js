import React from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function NavbarWeb() {
  return (
    <div className='sticky-top'>
      <Navbar expand="lg" data-bs-theme="dark" className='me-auto'>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src="assets/img/Logo Zerphius Final.png" width="130" className='mr-2' />
            <strong style={{ fontFamily: "Poppins", color: "white" }}>FUTURE AI TECHNOLOGY</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">          
              <NavDropdown title="MORE INFO" id="basic-nav-dropdown" className='mx-2 fw-bold text-end text-white' style={{ fontFamily: "Poppins" }}>
              <Nav.Link href="#more" className='mx-2 fw-bold text-white' style={{ fontFamily: "Poppins" }}>VISION & MISSION</Nav.Link>
              <Nav.Link href="#about" className='mx-2 fw-bold text-white' style={{ fontFamily: "Poppins" }}>ABOUT</Nav.Link>
              <Nav.Link href="#services" className='mx-2 fw-bold text-white' style={{ fontFamily: "Poppins" }}>OUR SERVICES</Nav.Link>
              <Nav.Link href="#catalog" className='mx-2 fw-bold text-white' style={{ fontFamily: "Poppins" }}>OUR PRODUCT</Nav.Link>
            </NavDropdown>
            <Nav.Link as={Link} to="/" className='mx-2 fw-bold text-end text-white' style={{ fontFamily: "Poppins" }}>
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
