import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css"
function Footer() {
    return (
        <div className = "footer">
            <Container>
                <Row>
                    <Col md = {4}>
                        <h4 class="wow fadeInUp">Contact Us</h4>
                        <p><i class="fa fa-home" aria-hidden="true"></i> 111 Main Street, Washington DC, 22222</p>
                        <p><i class="fa fa-envelope" aria-hidden="true"></i> info@media.com</p>
                        <p><i class="fa fa-phone" aria-hidden="true"></i> +1 222 222 2222</p>
                        <p><i class="fa fa-globe" aria-hidden="true"></i> www.media.com</p>
                    </Col>
                    <Col md = {4}>
                        <h4>About</h4>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> About Us</p>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> Privacy</p>
                        <p><i class="fa fa-square-o" aria-hidden="true"></i> Term & Condition</p>
                    </Col>
                    <Col md = {4}>
                            <h4>Stay in touch</h4>
                            <i class="social fa fa-facebook" aria-hidden="true"></i>
                            <i class="social fa fa-twitter" aria-hidden="true"></i>
                            <i class="social fa fa-linkedin" aria-hidden="true"></i>
                            <i class="social fa fa-pinterest" aria-hidden="true"></i>
                            <i class="social fa fa-youtube" aria-hidden="true"></i>
                            <i class="social fa fa-github" aria-hidden="true"></i><br/>
                            <input type="email" placeholder="Subscribe For Updates"/><button class="btn btn-success">Subscribe</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
