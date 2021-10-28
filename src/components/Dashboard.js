import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import axios from 'axios'


export default function Dashboard(props) {

  const [data, setData] = useState({})

  let token = localStorage.getItem('token')
  console.log(token)
  const getUserData = () => {
    axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user', {
      token: token
    })
      .then(function (response) {
        console.log(response);
        console.log('weeeeee')
      })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout', {
      token: token
    })
      .then(function (response) {
        console.log(response);
        // localStorage.removeItem('token')
        console.log()
        console.log('Successfully logged out!')
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        localStorage.removeItem('token')
        props.setToken('')
      });
  }
  return (
    <>
      <Container onLoad={getUserData}>
        <div>
          Hello, you are logged in.
        </div>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log out
        </Button>
      </Container>
    </>
  )


}