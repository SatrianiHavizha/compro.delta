import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

const Services = () => {
   return (
      <div className='services min-vh-100 d-flex align-item-center' fluid id='services'>
         <Container>
            <Col>
               <h1>Our Services</h1>
               <p className='text-white-50'>Superior service
               that we consistently deliver</p>
            </Col>
            <Row>
               <Col>
               <CardGroup >
                  <Card className='mx-1 mb-2' style={{ 
                     height:"17em"
                   }} data-aos="zoom-in-up">
                     <Card.Img variant="top" src="./assets/img/cyber security.jpg" />
                     <Card.Body>
                        <Card.Title className='text-center'>Cyber Security</Card.Title>
                     </Card.Body>
                  </Card>
                  <Card className='mx-1 mb-2' style={{ 
                     height:"17em"
                   }} data-aos="zoom-in-up" data-aos-delay="100">
                     <Card.Img variant="top" src="./assets/img/IoT.jpg" />
                     <Card.Body>
                        <Card.Title className='text-center'>IoT</Card.Title>                      
                     </Card.Body>
                  </Card>
                  <Card className='mx-1 mb-2' style={{ 
                     height:"17em"
                   }} data-aos="zoom-in-up" data-aos-delay="200">
                     <Card.Img variant="top" src="./assets/img/Network.jpg" />
                     <Card.Body>
                        <Card.Title className='text-center'>Network</Card.Title>
                     </Card.Body>
                  </Card>
                  <Card className='mx-1 mb-2' style={{ 
                     height:"17em"
                   }} data-aos="zoom-in-up" data-aos-delay="300">
                     <Card.Img variant="top" src="./assets/img/CS.jpg" />
                     <Card.Body>
                        <Card.Title className='text-center'>Cloud Service</Card.Title>
                     </Card.Body>
                  </Card>
                  <Card className='mx-1 mb-2' style={{ 
                     height:"17em"
                   }} data-aos="zoom-in-up" data-aos-delay="400">
                     <Card.Img variant="top" src="./assets/img/TC.jpg" />
                     <Card.Body>
                        <Card.Title className='text-center'>Technology Consultant</Card.Title>
                     </Card.Body>
                  </Card>
               </CardGroup>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Services