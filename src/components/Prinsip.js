import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const Prinsip = () => {
    return (
        <div className='prinsip pb-5 pt-2' id='prinsip'>
            <Container>
                <Row>
                    <Col>
                        <h2>Our Working Principle</h2>
                    </Col>
                </Row>
                <Row data-aos="fade-right">
                    <Col className='pt-3 pb-2'>
                        <Card style={{ width: '40rem', backgroundColor: "darkslategrey" }}>
                            <Card.Body>
                                <Card.Title className='fs-3 fw-bold text-white'><i class="fa-solid fa-map-pin"></i> Our Principle</Card.Title>
                                <p>
                                    Orientated to customer needs to find technology solutions and embrace ideas from clients.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row data-aos="fade-right">
                    <Col className='pb-2'>
                        <Card style={{ width: '40rem', backgroundColor: "darkslategrey" }}>
                            <Card.Body>
                                <Card.Title className='fs-3 fw-bold text-white'><i class="fa-solid fa-handshake"></i> Commitment</Card.Title>
                                <p>
                                    Committed to helping customers achieve, maintain high performance, work together to anticipate and understand operational issues in our clients that affect their industry.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row data-aos="fade-right">
                    <Col>
                        <Card style={{ width: '40rem', backgroundColor: "darkslategrey" }}>
                            <Card.Body>
                                <Card.Title className='fs-3 fw-bold text-white'><i class="fa-solid fa-circle-check"></i> Good Solution</Card.Title>
                                <p> 
                                    Provide the best solutions for clients in accordance with the vision of technology products.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Prinsip