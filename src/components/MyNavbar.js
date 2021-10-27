import React from 'react'
import {
  Navbar, Container, Nav,
  // Link
} from 'react-bootstrap'

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Products</Nav.Link>
            <Nav.Link >Your Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
