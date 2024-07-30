import React from 'react'
import { CardGroup, Col, Container, Row, Card, Button } from 'react-bootstrap'

const Catalog = () => {
    return (
        <div className='catalog pt-5 pb-5'>
            <Container>
                <Row>
                    <Col>
                        <h1 data-aos="fade-up">Featured Product</h1>
                        <p className='text-black-50' data-aos="fade-up" data-aos-delay="200">Zerphius AI</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Catalog