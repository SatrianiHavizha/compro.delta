import React from 'react';
import { Container, Col, Image, Row, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <div className='services pb-5 d-flex' id='services'>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h1 data-aos="fade-up">Our Services</h1>
            <p className='text-white-50' data-aos="fade-up" data-aos-delay="200">The Services We Provide</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={6} lg={5} className="mb-4" data-aos="fade-up">
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='fs-4 fw-bold'>
                  <Image src="assets/img/logo.png" width="50" /> Social Media Management
                </Card.Title>
                <ul>
                  <li><i>Content Scheduling and Publishing:</i> Automated scheduling of posts across multiple platforms, ensuring consistent and timely content delivery.</li>
                  <li><i>Multi-Platform Management:</i> A unified dashboard to manage accounts on Facebook, Instagram, Twitter, LinkedIn, and more.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={5} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='fs-4 fw-bold'>
                  <Image src="assets/img/AI.png" width="50" /> AI-Powered Analytics
                </Card.Title>
                <ul>
                  <li><i>Performance Insights:</i> Real-time analytics to track engagement, reach, and conversion rates, providing actionable insights to optimize campaigns.</li>
                  <li><i>Sentiment Analysis:</i> AI algorithms to analyze audience sentiment and feedback, helping businesses understand their brand perception.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
