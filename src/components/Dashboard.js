import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import axios from 'axios'


export default function Dashboard(props) {

  const [data, setData] = useState({})

  let token = localStorage.getItem('token')
  // console.log(token)

  useEffect(() => {
    axios({
      method: "get",
      url: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        // 'Access-Control-Allow-Credentials': true,
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        console.log(response)
      });
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout', {
    //   token: token
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     // localStorage.removeItem('token')
    //     console.log()
    //     console.log('Successfully logged out!')
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     localStorage.removeItem('token')
    //     props.setToken('')
    //   });
    axios({
      method: "get",
      url: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        // 'Access-Control-Allow-Credentials': true,
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        console.log(response)
        localStorage.removeItem('token')
        props.setToken('')
      });
  }
  return (
    <>
      <Container>
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