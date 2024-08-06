// import React from 'react';
// import { Col, Container, Row, Image } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <div className='footer pb-5 pt-5'>
//       <Container>
//         <Row>
//           <Col>
//             <Image src="assets/img/Logo Zerphius Final.png" width="250" style={{ padding: "30px" }}/>
//           </Col>
//         </Row>
//         <Row className="justify-content-center text-left">
//           <Col xs={12} md={8}>
//             
//           </Col>
//         </Row>
//         
//       </Container>
//     </div>
//   );
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function FooterWeb() {
  return (
    <footer className="footer mt-auto p-3 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={3} className="text-center">
            <Image src="assets/img/Logo Zerphius Final.png" width="200" className="mb-4" />
          </Col>
          <p>
            <i class="fa-solid fa-location-dot"></i> 3-chōme-1-6 Motoazabu, Minato City, Tokyo 106-0046, Japan
          </p>
        </Row>
        <Row className="justify-content-center text-center mt-3">
           <Col xs={12} md={8}>
             <p>&copy; {new Date().getFullYear()} <strong>Zerphius AI.</strong> All Rights Reserved</p>
           </Col>
         </Row>
      </Container>
    </footer>
  );
}

export default FooterWeb;

