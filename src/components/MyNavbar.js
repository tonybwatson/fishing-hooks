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
          
          <Nav className="me-auto">
            
            <Nav.Link >Products</Nav.Link>
            <Nav.Link >Your Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
