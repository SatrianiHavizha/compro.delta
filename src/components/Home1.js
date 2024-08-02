import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function Home1() {
    return (
        <div className='home1 min-vh-100' id="home">
            <Container>
                <Row>
                    <Col className='text-white text-center'>
                        <h1 class="animate__animated animate__fadeInUp">Social Media</h1>
                        <h2 class="animate__animated animate__fadeInUp">Management Service</h2>
                        <p className='text-black-50 animate__animated animate__fadeInUp animate__delay-1s'>Explore the power of AI in social media support</p>
                    </Col>
                </Row>
                <div className='form-container'>
                    <Form className="shadow animate__animated animate__fadeInUp" style={{ width: "30%", margin: "auto" }}>
                        <Form.Control type="text" placeholder="Search Here.." />
                    </Form>
                    <Button style={{ width: "15%", marginTop: "20px", backgroundColor: "black" }} className="shadow animate__animated animate__fadeInUp animate__delay-1s">Get Started</Button>
            </div>
            </Container>
        </div>
    )
}

export default Home1