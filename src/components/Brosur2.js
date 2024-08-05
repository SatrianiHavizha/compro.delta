import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Brosur2 = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate(-1);
    };

    return (
        <div>
            <Container>
                <Row className='flex'>
                    <Col>
                        <Card style={{ width: '70%' }} className='shadow mx-auto animate__animated animate__fadeInUp'>
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
                <Row className='justify-content-center mt-4'>
                    <Col xs={12} className='text-left p-5' style={{ fontFamily: "Poppins" }}>
                        <h3 onClick={handleGoHome}><i class="fa-solid fa-arrow-left"></i> Back</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Brosur2