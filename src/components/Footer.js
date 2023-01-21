import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="align-item-center">
              
                
                <Col className="text-center text-sm-end">
               
                <div className="social-icon sts">
               
                    <a href="https://www.linkedin.com/in/priyanshu-singh-technophile"><img src={navIcon1} alt="nav1" /></a>
                    <a href="https://www.facebook.com/impriyanshusingh"><img src={navIcon2} alt="nav2" /></a>
                    <a href="https://www.instagram.com/priyanshu_singh2103/"><img src={navIcon3} alt="nav3" /></a>
                </div>
                <p>Copyright 2022. All rights reserved</p>
           

                </Col>


                </Row>
            </Container>
        </footer>
    )

}