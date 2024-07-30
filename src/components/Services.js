import React from 'react'
import { Container, Col, Image, Row, Card, CardGroup } from 'react-bootstrap'

const Services = () => {
   return (
      <div className='services min-vh-100 d-flex' fluid id='services'>
         <Container>
            <Row>
               <Col>
                  <h1 data-aos="fade-up">Our Services</h1>
                  <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">The Services We Provide</p>
               </Col>
            </Row>
            <CardGroup className='mt-3'>
            <Row data-aos="fade-up">
               <Col>
                  <Card style={{ width: '30rem' }} className='shadow mx-2'>
                     <Card.Body>
                        <Card.Title className='fs-4 fw-bold'><Image src="assets/img/logo.png" width="50" /> Social Media Management</Card.Title>
                        <p>
                           <ul>
                              <li><i>Content Scheduling and Publishing:</i> Automated scheduling of posts across
                                 multiple platforms, ensuring consistent and timely content delivery.
                              </li>
                              <li><i>Multi-Platform Management:</i> A unified dashboard to manage accounts on
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
                  <Card style={{ width: '30rem'}} className='shadow mx-5'>
                     <Card.Body>
                        <Card.Title className='fs-4 fw-bold'><Image src="assets/img/AI.png" width="50" /> AI-Powered Analytics</Card.Title>
                        <p>
                           <ul>
                              <li><i>Performance Insights:</i> Real-time analytics to track engagement, reach, and
                                 conversion rates, providing actionable insights to optimize campaigns.
                              </li>
                              <li><i>Sentiment Analysis:</i> AI algorithms to analyze audience sentiment and feedback,
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