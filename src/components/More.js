import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const More = () => {
  return (
    <div className='more pb-5 pt-5' id='more'>
        <Container>
            <Row>
                <Col>
                    <h2>Get to Know More</h2>
                    <h3>About Our Company</h3>
                </Col>
            </Row>
            <Row>
                <Col data-aos="fade-up">
                    <h5>Company Focus</h5>
                    <p>We are committed to providing innovative information and communication technology solutions, designed to meet the evolving needs and challenges of today’s digital era.</p>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="200">
                    <h5>Company Vision</h5>
                    <p>To become a trusted ICT (Information Communication Technology) by providing a complete range of technology services.</p>
                </Col>
                <Col data-aos="fade-up" data-aos-delay="300">
                    <h5>Company Mission</h5>
                    <p>Committed to providing a complete range of technology by delivering the latest technology solutions, developing innovative products and high quality services to fulfil market demands.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default More