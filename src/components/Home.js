import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
    return (
        <div className='home min-vh-100' id='home'>
            <Container>
                <Row className='display-flex'>
                    <Col className='text-white text-left'>
                        <h1 class="animate__animated animate__slideInLeft">The IT Edge You Need And Beyond IT Boundaries</h1>
                        <p className='text-white-50 animate__animated animate__fadeInUp animate__delay-1s'>Make your journey to business success smoother with innovative, reliable and customised IT solutions, because we understand that every step towards success requires a strong and reliable technological foundation.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home