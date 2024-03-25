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
    <Navbar expand="lg" className="navbar sticky-top">
      <Container className='narbar-container'>
        <Navbar.Brand href="/"> <img className='logo' src={logo}></img> </Navbar.Brand>
        
          <Nav className="navItems me-auto">
            <Nav.Link className='navOption' href="/"><h5>Home</h5></Nav.Link>
            <Nav.Link className='navOption' href="/identify"><h5>Identify</h5></Nav.Link>
            <Nav.Link className='navOption' href="/favoriteList"> <h5>Favorites List</h5> </Nav.Link>
            <Nav.Link className='navOption' href="/plantDisease"> <h5>Plant Diseases</h5> </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Header