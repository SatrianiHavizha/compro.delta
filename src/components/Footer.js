import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className='footer pb-3 pt-5'>
      <Container >
        <Row>
          <Col>
            <i class="fa-regular fa-building text-white fs-1 mx-lg-3 mx-2"></i>
            <h5>Head Office</h5>
            <p>Gedung Arva Lt. 3 Jl. RP. Soeroso No. 40 BC RT.002/RW.002 Kel. Gondangdia Kec. Menteng Jakarta Pusat 10350</p>
          </Col>
          <Col>
            <i class="fa-regular fa-envelope text-white fs-1 mx-lg-3 mx-2"></i>
            <h5>Get In Touch</h5>
            <p>info@deltadigital.co.id</p>
          </Col>
          <Col>
            <i class="fa-regular fa-building text-white fs-1 mx-lg-3 mx-2"></i>
            <h5>Marketing Office</h5>
            <p>Jl. Kyai Maja No.25C, RT.12/RW.2, Gunung, Kebayoran Baru, Jakarta Selatan, Jakarta 12120</p>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col>
            <p className='text-center text-white-50'>&copy; Copyright <strong>Delta Digital Technology.</strong> All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer 
