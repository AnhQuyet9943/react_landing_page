import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../css/Clients.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Clients() {

    useEffect(() => {
        AOS.init({duration: 2000});
      },[]);


    return (
        <div className='clients' id = 'clients'>
            <Container fluid>
                <h4>TRUSTED BY</h4>
                <p>Lorem Ipsum passages, and more recently with desktop publishing software</p>
                <Row>
                    <Col md ={3} data-aos="zoom-out-left">
                    <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.15752-9/50416153_2253343218321598_7405941769260498944_n.png?_nc_cat=111&_nc_sid=ae9488&_nc_ohc=e_arAv3_sT4AX_EflTe&_nc_ht=scontent.fhan5-3.fna&oh=3c9a0bc850323cb43ea922e4a24a5c8e&oe=5FAD1A93" alt=""/>
                    </Col>
                    <Col md ={3} data-aos="zoom-out-right">
                    <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.15752-9/121331501_1412286532308830_4178118859257691483_n.png?_nc_cat=106&_nc_sid=ae9488&_nc_ohc=ISFU2LDBD88AX_6r66f&_nc_ht=scontent.fhan5-3.fna&oh=5758c9bca9b25ba2211b456777fcdcc2&oe=5FAF68C6" alt=""/>
                    </Col>
                    <Col md ={3} data-aos="zoom-out-right">
                    <img src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.15752-9/121484513_984514845363318_2699044582653133628_n.png?_nc_cat=105&_nc_sid=ae9488&_nc_ohc=z5LaoOHiFt0AX9Yo_T8&_nc_ht=scontent.fhan5-6.fna&oh=890c91803f943939c7d13de4b7b6ab8d&oe=5FAF600B" alt=""/>
                    </Col>
                    <Col md ={3} data-aos="zoom-out-left">
                    <img src="https://scontent.fhan5-5.fna.fbcdn.net/v/t1.15752-9/121517142_2695062424107530_600049331927759776_n.png?_nc_cat=101&_nc_sid=ae9488&_nc_ohc=Z8NnEaISn4AAX_vy7Tj&_nc_ht=scontent.fhan5-5.fna&oh=5ef1925552419f6ee1c5940c7e1ffb2b&oe=5FADC2B4" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Clients
