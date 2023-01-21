

import Card from 'react-bootstrap/Card';
import keeper from '../assets/img/keeper.png';
import web from '../assets/img/web.png'
import { Container, Row, Col } from "react-bootstrap";


export const Projects = () => {
  return (
  <section id='projects'>
<Container className='place'>
<div className='marg'>
    <h2 className='pro'>Projects</h2>
</div>

<Row>
<Col sm={6} md={6} xs={12}>
    <Card >
      <Card.Img variant="top" src={keeper} />
      <Card.Body>
        <Card.Title className='keep'>Keeper App Project</Card.Title>
        <Card.Text className='txtk'>
         This is a note taking desktop app which is capable of addition and deletion of notes in real time. I made this project using HTML, CSS, Javascript and React. 
        </Card.Text>
        <Card.Link href="https://gmljz2.csb.app/">Keeper App Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={6} md={6} xs={12}>
    <Card>
      <Card.Img variant="top" src={web} />
      <Card.Body>
        <Card.Title className='keep'>Personal Website Project</Card.Title>
        <Card.Text className='txtk'>
         This is a responsive personal website which i made using HTML, CSS and React. 
         This contains basic use of html and css styling.
        </Card.Text>
        <Card.Link href="https://gmljz2.csb.app/">Website Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>

    </Container>
    </section>
  );
}

