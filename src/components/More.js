import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const More = () => {
    return (
        <div className='more pt-5  mt-5' id='more'>
            <Container>
                <Row className="g-4 pt-5 mt-5">
                    <Col xs={12} md={6} data-aos="fade-up">
                        <Card style={{ backgroundColor: "#05a5df" }}>
                            <Card.Body>
                                <h5><i className="fa-solid fa-eye"></i> Vision Statement</h5>
                                <p>To connect the world and empower every individual with the ability to share, discover, and
                                    engage in meaningful ways, fostering a global community where everyone’s voice can be
                                    heard.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
                        <Card style={{ backgroundColor: "#05a5df" }}>
                            <Card.Body>
                                <h5><i className="fa-solid fa-bullseye"></i> Mission Statement</h5>
                                <p>Our mission is to create a platform that enables seamless communication, fosters genuine
                                    connections, and drives innovation in digital interaction. We strive to ensure a safe, inclusive,
                                    and engaging environment where users can share their stories, explore new ideas, and build
                                    communities that transcend borders.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default More;
