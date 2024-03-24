import React from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/narBar/logo.png'
import './header.css'

function Header() {
  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container className=' narbar-container'>
        <Navbar.Brand href="/">
          <img className ='logo' src={logo}></img>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className ='navOption' href="/">Home</Nav.Link>
            <Nav.Link className ='navOption' href="/identify">Identify</Nav.Link>
            <Nav.Link className ='navOption'href="/favoriteList"> Favorite Plant </Nav.Link>
            <NavDropdown className ='navOption'title="Explore" >
              <NavDropdown.Item className ='navOption'href="/plantDisease"> Plant Disease List </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header