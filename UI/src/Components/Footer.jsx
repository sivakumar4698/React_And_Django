import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const Footer = () => {
  return (
    
    <footer>
    <Navbar fixed="bottom" bg="light">
    <Container className="col-md-1">
      <Navbar.Brand href="#home">Copyright © BeCool 2022</Navbar.Brand>
    </Container>
  </Navbar>
</footer>
  )
}

export default Footer;