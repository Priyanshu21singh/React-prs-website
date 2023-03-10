import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import prs from "../assets/img/impps.png";


export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = [ "Web Developer", "Front-End ReactJS Developer" ];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
    tick();
},delta)
    return () => {clearInterval(ticker);}
},[text])

const tick = () => {
let i = loopNum % toRotate.length;
let fullText = toRotate[i];
let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

setText(updatedText);
if(isDeleting){
    setDelta(prevDelta => prevDelta/2)
}
if(!isDeleting && updatedText === fullText){
    setIsDeleting(true);
    setDelta(period);
}
    else if(isDeleting&&updatedText === ''){
setIsDeleting(false);
setLoopNum(loopNum+1);
setDelta(500);

    }


}

    return(
<section className="banner" id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{'Hi I am Priyanshu '} <span className="wrap">{text}</span></h1>
            <p>I am a Front End Web Developer who makes beautiful websites which are fully responsive and interactive using HTML,CSS,JAVASCRIPT and REACT. </p>
            
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img className="imgset" src={prs} alt='headder-img' />

            </Col>
        </Row>
    </Container>
</section>

    )
}