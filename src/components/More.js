import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const More = () => {
    return (
        <div className='more pb-5' id='more'>
            <Container>
                <Row>
                    <Col>
                        <h2></h2>
                        {/* <h3>About Our Company</h3> */}
                    </Col>
                </Row>
                <Row>
                    <Col data-aos="fade-up">
                        <Card style={{ width: '30rem', backgroundColor: "#05a5df" }}>
                            <CardBody>
                                <h5><i class="fa-solid fa-eye"></i> Vision Statement</h5>
                                <p>To connect the world and empower every individual with the ability to share, discover, and
                                    engage in meaningful ways, fostering a global community where everyone’s voice can be
                                    heard.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200">
                    <Card style={{ width: '30rem', backgroundColor: "#05a5df" }}>
                        <CardBody>
                        <h5><i class="fa-solid fa-bullseye"></i> Mission Statement</h5>
                        <p>Our mission is to create a platform that enables seamless communication, fosters genuine
                            connections, and drives innovation in digital interaction. We strive to ensure a safe, inclusive,
                            and engaging environment where users can share their stories, explore new ideas, and build
                            communities that transcend borders.</p>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default More