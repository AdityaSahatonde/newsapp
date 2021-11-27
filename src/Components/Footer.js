import React from 'react'
import {Container, Row , Col } from 'react-bootstrap'
// import { MDBBtn, MDBIcon } from 'mdbreact'
// import 'mdbreact/dist/css/mdb.css'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css';
// import {FaTwitter} from 'react-icons/fa'
import { Facebook, GitHub, Linkedin} from 'react-feather';




import './Footer.css'
function Footer() {
    return (
        // <div>
            <Container bg="dark" variant="dark" sticky="bottom" fluid>

                <Row className="bg-dark">

                        <Col className="text-center text-light pt-2"  >
                            
                            <p>  <GitHub/>  </p>
                            <p><Linkedin/></p>
                             <p><Facebook/></p>
                            
                            
                            <span> Copyright &copy; 2021 Aplus News, Ltd. </span>

                        </Col>

                </Row>



            </Container>
            
        // </div>
    )
}

export default Footer
