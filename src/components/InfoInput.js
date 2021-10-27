import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function InfoInput() {

  const [data, setData] = useState({

  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register', {
      name: data.formBasicName,
      email: data.formBasicEmail,
      password: data.formBasicPassword
    })
      .then(function (response) {
        console.log(response);
        const token = localStorage.setItem('token', response.data.data.token)
        console.log(token)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <Container>
      <h1>New User? Create an account!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name"
            // id="name"
            placeholder="Name"
            onChange={handleChange}
            defaultValue={data.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            // id="email"
            placeholder="Enter email"
            onChange={handleChange}
            defaultValue={data.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            // id="password"
            placeholder="Password"
            onChange={handleChange}
            defaultValue={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  )
}
