import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import ProgressBar from './ProgressBar';

function NavbarWeb() {
  return (
    <div className='sticky-top'>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="assets/img/Logo Zerphius Final.png" width="130" className='mr-2' />
            <strong style={{ fontFamily: "Poppins" }}>FUTURE AI TECHNOLOGY</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='mx-5 fw-bold' style={{ fontFamily: "Poppins" }}><i class="fa-solid fa-house"></i> HOME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ProgressBar />
    </div>
    
  );
}

export default NavbarWeb;