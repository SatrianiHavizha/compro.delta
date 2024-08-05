import React from 'react'
import { CardGroup, Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
    const navigate = useNavigate()

    return (
        <div className='catalog pt-5 pb-5' id='catalog'>
            <Container>
                <Row>
                    <Col className='pt-5'>
                        <h1 data-aos="fade-up">Featured Product</h1>
                        <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">Zerphius AI</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <CardGroup>
                        <Card className='shadow mx-2' data-aos="fade-up">
                            <Card.Img src="./assets/Brosur/TB1-.jpg" className="img-thumbnail"/>
                            <Card.Body style={{ fontFamily: "Poppins" }}>
                                <Card.Title>Theridion Brochure</Card.Title>
                                <Button onClick={() => navigate('/BrosurT')} variant="dark" className='mt-3'>Data here</Button>
                            </Card.Body>
                        </Card>
                        <Card className='shadow mx-2' data-aos="fade-up" data-aos-delay="200">
                            <Card.Img src="./assets/Brosur/T1-.jpg" className="img-thumbnail"/>
                            <Card.Body style={{ fontFamily: "Poppins" }}>
                                <Card.Title>Countrywide Filtering Theridion</Card.Title>
                                <Button onClick={() => navigate('/BrosurTB')} variant="dark" className='mt-3'>Data here</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        </div>
    )
}

export default Catalog
