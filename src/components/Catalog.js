import React from 'react'
import { CardGroup, Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
    const navigate = useNavigate()

    return (
        <div className='catalog pt-5 pb-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 data-aos="fade-up">Featured Product</h1>
                        <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">Zerphius AI</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <CardGroup>
                        <Card style={{ width: '20rem' }} className='shadow mx-4' data-aos="fade-up">
                            <Card.Img src="./assets/Brosur/TB1-.jpg" className="img-thumbnail"/>
                            <Card.Body>
                                <Button onClick={() => navigate('/BrosurT')}variant="primary" className='mt-3'>See More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem' }} className='shadow mx-4' data-aos="fade-up" data-aos-delay="200">
                            <Card.Img src="./assets/Brosur/T1-.jpg" className="img-thumbnail"/>
                            <Card.Body>
                                <Button onClick={() => navigate('/BrosurTB')}variant="primary" className='mt-3'>See More</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        </div>
    )
}

export default Catalog