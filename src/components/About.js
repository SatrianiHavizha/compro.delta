import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <div className='about min-vh-100' id='about'>
      <Container>
        <Row>
          <Col>
            <h1 data-aos="fade-up">
              About Us
            </h1>
            <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">Overview</p>
            <p data-aos="fade-up" data-aos-delay="200">Zerphius Corporation is a leading Japanese company in the social media and technology
              sector. It operates the popular messaging app "Line," which has become one of the most
              widely used communication tools in Japan and several other Asian countries.
              A social media company that offers management services and leverages AI
              technology provides tools and solutions to help businesses optimize their social
              media presence, analyze performance, and engage with their audience more
              effectively.</p>
          </Col>
        </Row>
        <Row> 
          <Col>
            <h2 data-aos="fade-up">
              More About Us
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className='pb-5 mb-5'>
              Social AI Solutions Inc. is a cutting-edge technology company specializing in social
              media management services powered by advanced artificial intelligence (AI). The
              company offers a comprehensive suite of tools designed to help businesses of all
              sizes enhance their social media strategies, streamline content creation, and
              maximize engagement.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About