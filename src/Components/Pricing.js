import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../css/Pricing.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Pricing() {

    useEffect(() => {
        AOS.init({duration: 2000});
    },[]);

    return (
        <div className = "pricing" id = 'pricing'>
           <Container fluid >
               <h4 data-aos="fade-up">PRICING</h4>
               <p data-aos="fade-up">orem Ipsum passages, and more recently with desktop publishing software</p>
               <Row>
                   <Col md ={3} className="pl-5" data-aos="flip-right">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>9.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button class="btn btn-success">Get Started</button>
                        </div>
                   </Col>
                   <Col md ={3} data-aos="flip-left">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>9.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button class="btn btn-success">Get Started</button>
                        </div>
                   </Col>
                   <Col md ={3} data-aos="flip-left">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>9.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button class="btn btn-success">Get Started</button>
                        </div>
                   </Col>
                   <Col md ={3} className="pr-5" data-aos="flip-right">
                        <div className="packages">
                            <h4>Bronze</h4>
                            <h1>9.99</h1>
                            <b>Monthly</b>
                            <p>Lorem Ipsum passages, and more recently with desktop</p>
                            <hr/>
                            <li>100 Users</li>
                            <li>SSL Certificate</li>
                            <li>Online Support</li>
                            <li>300GB Disckspace</li>
                            <li>100 Email Address</li>
                            <li>MySQL Database</li>
                            <button className="btn btn-success">Get Started</button>
                        </div>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Pricing
