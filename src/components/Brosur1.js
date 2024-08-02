import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Brosur1 = () => {

    return (
        <div>
            <Container>
                <Row className='flex'>
                    <Col>
                            <Card style={{ width: '70%' }} className='shadow mx-auto animate__animated animate__fadeInUp'>
                                <Card.Img src="./assets/Brosur/2/TB1.jpg" className="img-thumbnail" />
                            </Card>
                            <Card style={{ width: '70%' }} className='shadow mx-auto mt-5' data-aos="fade-up">
                                <Card.Img src="./assets/Brosur/2/TB2.jpg" className="img-thumbnail" />
                            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brosur1