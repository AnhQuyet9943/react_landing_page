import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../css/Header.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {

  useEffect(() =>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div class="header" id ="header"  >
      <Container fluid>
        <Row>
          <Col md={6} className="pl-5" data-aos="fade-right">
            <h1>Responsive Web Design</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
            <Button variant="primary" className="ml-5">
              Buy Now
            </Button>
            <Button variant="success" className="ml-5">
              View Detail
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.15752-9/48428268_1460038754139794_6128406641873256448_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_ohc=FiMIyWKeco4AX_9e75l&_nc_ht=scontent.fhan5-7.fna&oh=6f913ce62aebaa6e845818ddd715c90b&oe=5FB07CF0"
              alt="anh 1"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Header;
