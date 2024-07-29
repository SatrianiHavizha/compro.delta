import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className='footer pb-3 pt-5'>
      <Container >
        <Row>
          <Col>
            <h5><i class="fa-solid fa-map-location-dot"></i> 3-chōme-1-6 Motoazabu, Minato City, Tokyo 106-0046, Japan</h5>
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; Copyright <strong>Zerphius.</strong> All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer 
