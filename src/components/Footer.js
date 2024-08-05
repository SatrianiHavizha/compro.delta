import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer  pt-3'>
      <Container>
        <Row className="justify-content-center text-left">
          <Col xs={12} md={8}>
            <h5>
              <i className="fa-solid fa-map-location-dot"></i> 3-chōme-1-6 Motoazabu, Minato City, Tokyo 106-0046, Japan
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-3">
          <Col xs={12} md={8}>
            <p>&copy; {new Date().getFullYear()} <strong>Zerphius.</strong> All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
