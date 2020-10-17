import React, { useEffect }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../css/Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[]);

  return (
    <div className="contact" id = "contact">
      <Container>
        <h2 data-aos="fade-up">Contact</h2>
        <p data-aos="fade-up">
          Lorem Ipsum passages, and more recently with desktop publishing
          software
        </p>
        <Row>
          <Col md={6} data-aos="zoom-in-up">
            <div>
              <InputGroup className="mb-3 ">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">User</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="User Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3 ">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon2">Email </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Email Address"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <InputGroup className="mb-3 ">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">Phone</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Phone Number"
                  aria-label="Username"
                  aria-describedby="basic-addon3"
                />
              </InputGroup>
            </div>
          </Col>
          <Col md={6} data-aos="zoom-in-up">
            <div class="input-group ">
              <textarea
                name=""
                id=""
                cols="80"
                rows="6"
                class="form-control"
              ></textarea>
            </div>
            <Button variant="danger mt-3" size="lg" block>
            Submit Your Message
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
