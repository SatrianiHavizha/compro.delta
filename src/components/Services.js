import React from 'react'
import { Container, Col, Image, Row, Card, CardGroup } from 'react-bootstrap'

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
            <CardGroup className='mt-5'>
            <Row data-aos="fade-up">
               <Col>
                  <Card style={{ width: '30rem' }}>
                     <Card.Body>
                        <Card.Title className='fs-4 fw-bold'><Image src="assets/img/logo.png" width="50" /> Social Media Management</Card.Title>
                        <p>
                           <ul>
                              <li>Content Scheduling and Publishing: Automated scheduling of posts across
                                 multiple platforms, ensuring consistent and timely content delivery.
                              </li>
                              <li>Multi-Platform Management: A unified dashboard to manage accounts on
                                 Facebook, Instagram, Twitter, LinkedIn, and more.
                              </li>
                           </ul>
                        </p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-delay="200">
               <Col>
                  <Card style={{ width: '30rem'}}>
                     <Card.Body>
                        <Card.Title className='fs-2 fw-bold'><Image src="assets/img/AI.png" width="50" /> AI-Powered Analytics</Card.Title>
                        <p>
                           <ul>
                              <li>Performance Insights: Real-time analytics to track engagement, reach, and
                                 conversion rates, providing actionable insights to optimize campaigns.
                              </li>
                              <li>Sentiment Analysis: AI algorithms to analyze audience sentiment and feedback,
                                 helping businesses understand their brand perception.</li>
                           </ul>
                        </p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            </CardGroup>
         </Container>
      </div>
   )
}

export default Services