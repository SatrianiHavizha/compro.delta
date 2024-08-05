import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Home1 = () => {
    return (
        <div className='home1 min-vh-100' id="home">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} className='text-white text-center'>
                        <h1 className="animate__animated animate__fadeInUp">Social Media</h1>
                        <h2 className="animate__animated animate__fadeInUp">Management Service</h2>
                        <p className='text-white-50 animate__animated animate__fadeInUp animate__delay-1s'>
                            Explore the power of AI in social media support
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs={10} sm={8} md={6} lg={4} className='form-container'>
                        <Form className="shadow animate__animated animate__fadeInUp" style={{ margin: "auto", fontFamily: "Poppins" }}>
                            <Form.Control type="text" placeholder="Search Here.." />
                        </Form>
                        <Button 
                            style={{ width: "60%", marginTop: "20px", backgroundColor: "black", fontFamily: "Poppins" }} 
                            className="shadow animate__animated animate__fadeInUp animate__delay-1s"
                        >
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home1;
