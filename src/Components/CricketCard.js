import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
function CricketCard(props) {

    return (
        <div >
        <Container fluid="md">
        <Row>
        
        {props.articles.map((el,index)=><Col> <Card className="bg-dark text-white" key={index} style={{ width: '18rem' , height :'21rem',marginBottom:'20px'}}>
                <Card.Img variant="top" src={el.urlToImage} style={{height:150}} alt="Image Not Found"/>
            <Card.Body>
                {/* <Card.Title></Card.Title> */}
                <Card.Text>
                {el.title}
                </Card.Text>
                <a href= {el.url} >View More</a>
            </Card.Body>
        </Card> </Col>)}
    
        </Row>
        </Container>
            
        </div>
    )
}

export default CricketCard
