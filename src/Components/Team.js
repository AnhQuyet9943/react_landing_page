import React , { useEffect }  from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../css/Team.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Team() {

    useEffect(() => {
        AOS.init({duration: 2000});
    },[]);


    return (
        <div className = "team" id = 'team'>
           <Container fluid>
               <h2 data-aos="fade-up">MEET OUR TEAM</h2>
               <p data-aos="fade-up">Lorem Ipsum passages, and more recently with desktop publishing software</p>
               <Row>
                   <Col md = {3} className="pl-5" data-aos="slide-left" >
                   <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/121106153_385864049113395_4583011703646951270_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=g9rYdkQrlygAX-Xje2o&_nc_ht=scontent.fhan5-6.fna&oh=61f5178216ebf9dec3fa019e3d230ac0&oe=5FAD4282" class="img-circle" alt=""/>
                    <h4>John Doe</h4>
                    <b>CEO and Founder</b>
                    <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                   </Col>
                   <Col md = {3} data-aos="slide-right">
                   <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/121106153_385864049113395_4583011703646951270_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=g9rYdkQrlygAX-Xje2o&_nc_ht=scontent.fhan5-6.fna&oh=61f5178216ebf9dec3fa019e3d230ac0&oe=5FAD4282" class="img-circle" alt=""/>
                    <h4>John Doe</h4>
                    <b>CEO and Founder</b>
                    <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                   </Col>
                   <Col md = {3} data-aos="slide-left">
                   <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/121106153_385864049113395_4583011703646951270_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=g9rYdkQrlygAX-Xje2o&_nc_ht=scontent.fhan5-6.fna&oh=61f5178216ebf9dec3fa019e3d230ac0&oe=5FAD4282" class="img-circle" alt=""/>
                    <h4>John Doe</h4>
                    <b>CEO and Founder</b>
                    <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                   </Col>
                   <Col md = {3} className="pr-5" data-aos="slide-right">
                   <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/121106153_385864049113395_4583011703646951270_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=g9rYdkQrlygAX-Xje2o&_nc_ht=scontent.fhan5-6.fna&oh=61f5178216ebf9dec3fa019e3d230ac0&oe=5FAD4282" class="img-circle" alt=""/>
                    <h4>John Doe</h4>
                    <b>CEO and Founder</b>
                    <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Team
