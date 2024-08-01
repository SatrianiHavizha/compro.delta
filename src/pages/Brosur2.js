import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Brosur2 = () => {
    return (
        <div>
            <Container>
                <Row className='flex'>
                    <Col>
                            <Card style={{ width: '70%' }} className='shadow mx-auto' data-aos="fade-up">
                                <Card.Img src="./assets/Brosur/1/T1.jpg" className="img-thumbnail" />
                            </Card>
                            <Card style={{ width: '70%' }} className='shadow mx-auto mt-5' data-aos="fade-up" data-aos-delay="200">
                                <Card.Img src="./assets/Brosur/1/T2.jpg" className="img-thumbnail" />
                            </Card>
                            <Card style={{ width: '70%' }} className='shadow mx-auto mt-5' data-aos="fade-up" data-aos-delay="300">
                                <Card.Img src="./assets/Brosur/1/T3.jpg" className="img-thumbnail" />
                            </Card>
                            <Card style={{ width: '70%' }} className='shadow mx-auto mt-5' data-aos="fade-up" data-aos-delay="400">
                                <Card.Img src="./assets/Brosur/1/T4.jpg" className="img-thumbnail" />
                            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brosur2