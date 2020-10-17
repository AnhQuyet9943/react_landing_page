import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/Services.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {

  useEffect(() => {
      AOS.init({duration: 2000});
  },[]);

  return (
    <div className = "services" id = 'services'>
      <Container fluid>
        <h2 data-aos="fade-up">Services</h2>
        <p data-aos="fade-up">
          Lorem Ipsum is simply dummy text of the printing and typesettin dummy
          text
        </p>
        <Row data-aos="fade-left">
          <Col md={3} className="pl-5">
            <i class="	fa fa-area-chart"></i>
            <h4>web design</h4>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software
            </p>
          </Col>
          <Col md={3}>
            <i class="	fa fa-bar-chart"></i>
            <h4>Mobile Apps</h4>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software
            </p>
          </Col>
          <Col md={3}>
            <i class="fa fa-line-chart"></i>
            <h4>Database</h4>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software
            </p>
          </Col>
          <Col md={3} className="pr-5">
            <i class="	fa fa-pie-chart"></i>
            <h4>Consulting</h4>
            <p>
              Lorem Ipsum passages, and more recently with desktop publishing
              software
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
