import React from 'react'
import { Col, Container, Button, Row } from 'react-bootstrap'

function Home() {
    return (
        <div className='home min-vh-100' id='home'>
            <Container>
                <Row className='display-flex'>
                    <Col className='text-white text-center'>
                        <h1 class="animate__animated animate__fadeInUp">Social Media</h1>
                        <h2 class="animate__animated animate__fadeInUp">Management Service</h2>
                        <p className='animate__animated animate__fadeInUp animate__delay-1s'>Explore the power of AI in social media support</p>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Col>
                </Row>
                <Row>
                   
                </Row>
            </Container>
        </div>
    )
}

export default Home