import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

function About() {
  return (
    <div className='about min-vh-100' id='about'>
      <Container>
        <Row>
          <Col className='text-white'>
            <h1>
              About Us
            </h1>
            <p>A place where imagination meets technology to create a bright future. We are not just another IT company. We are tireless innovators, always looking for ways to change the world through technology.

              We believe that every challenge is an opportunity for growth. With a team of passionate experts, we are committed to delivering IT solutions that not only solve problems, but also inspire change. From revolutionary software development to complex system integration, we are ready to help you realise your vision.

              However, our success lies not only in the advanced technology we offer. We build strong relationships with our customers, fuelled by values such as integrity, diversity, and a relentless dedication to exceptional customer service.

              Let us together explore the infinite world of technological innovation. Join us for a future filled with incredible opportunities and achievements.</p>
          </Col>
          <Col>
              <Image src="assets/img/about.png" width="85%"/>           
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About