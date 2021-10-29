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
				setData(response.data)
			});
	}, [token])
	// console.log(data)

	const handleSubmit = (e) => {
		e.preventDefault()
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
					<h3>
						Hello, {data?.data?.user_data?.name}, you are logged in!
            </h3>
				</div>
				{/* {() => {
					(data?.data?.user_data?.orders?.length === 0)
						? <p>You have no previous orders.</p>
						: <p> {data?.data?.user_data?.orders[0]}</p>
				}} */}
				<p>Your total orders: {data?.data?.user_data?.orders[0]?.purchases[0]?.amount}</p>
			
				<p className="m-0">Not {data?.data?.user_data?.name}? </p>
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Log out
        </Button>
			</Container>
		</>
	)
}