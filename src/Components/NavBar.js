import React from 'react'
import { Container, Navbar,  Nav } from 'react-bootstrap';
import India from './India';
import Cricket from './Cricket';
import Entertainment from './Entertainment';
import NewsLogo from './NewsLogo.jpg'
import './NavBar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function NavBar() {
    return (
        
        <Router>
        <div>
        <>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg" style={{marginBottom:25}}>
  <Container fluid>
    <Navbar.Brand href="#" style={{marginLeft:'15px'}}><img src={NewsLogo} alt="Imge not found" style={{height:40}} /> News </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
        <Nav.Link as={Link } to ={"/"} style={{marginLeft:'10px'}}>India</Nav.Link>

        <Nav.Link as={Link } to ={"/Cricket"} style={{marginLeft:'10px'}}>Cricket</Nav.Link>
        <Nav.Link as={Link } to ={"/Entertainment"} style={{marginLeft:'10px'}}>Entertainment</Nav.Link>


        
    
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>

</>
<Switch>
   
    <Route  path="/Cricket">
        <Cricket/>
    </Route>
    <Route path="/Entertainment">
        <Entertainment/>
    </Route>
    <Route path="/">
        <India/>
    </Route>
</Switch>

            
</div>
</Router>
    )
}

export default NavBar
