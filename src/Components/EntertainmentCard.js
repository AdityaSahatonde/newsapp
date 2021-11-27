import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
function EntertainmentCard(props) {

    return (
        <div className="NewCard">
        <Container fluid="md">
        <Row>
        
        {props.articles.map((el,index)=><Col> <Card xs="12" className="bg-dark text-white" key={index} style={{ width: '18rem' , height :'22rem',marginBottom:'20px'}}>
                <Card.Img variant="top" src={el.urlToImage} style={{height:150}} />
            <Card.Body>
                
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

export default EntertainmentCard
