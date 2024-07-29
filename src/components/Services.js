import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'

const Services = () => {
   return (
      <div className='services min-vh-100 d-flex align-item-center' fluid id='services'>
         <Container>
            <Row>
               <Col>
                  <h1 data-aos="fade-up">Our Services</h1>
                  <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">Superior service
                     that we consistently deliver</p>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Image src="assets/img/logo.png" width="80" />
               </Col>
               <Col>
                  <h3>Social Media Management:</h3>
                  <p>- Content Scheduling and Publishing: Automated scheduling of posts across
                     multiple platforms, ensuring consistent and timely content delivery.</p>
                  <p>- Multi-Platform Management: A unified dashboard to manage accounts on
                     Facebook, Instagram, Twitter, LinkedIn, and more.</p>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Image src="assets/img/AI.png" width="80" />
               </Col>
               <Col>
                  <h3>AI-Powered Analytics:</h3>
                  <p>- Performance Insights: Real-time analytics to track engagement, reach, and
                  conversion rates, providing actionable insights to optimize campaigns.</p>
                  <p>- Sentiment Analysis: AI algorithms to analyze audience sentiment and feedback,
                  helping businesses understand their brand perception.</p>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Services