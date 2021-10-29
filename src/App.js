import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import InfoInput from './components/InfoInput'
import LoginInput from './components/LoginInput'
import Dashboard from './components/Dashboard'
import MyNavbar from './components/MyNavbar';




function App() {
	const [token, setToken] = useState('')

	const updateFunction = () => {
		console.log('component successfully updated')
		const lsToken = localStorage.getItem('token')

		if (lsToken) {
			setToken(lsToken)
		}

	}
	useEffect(updateFunction, [])
console.log(token)
	return (
		<>
			{/* <MyNavbar /> */}
			<BrowserRouter >
				<MyNavbar />
				<Switch>
					<Route path="/dashboard">
						{token.length === 0
							? <Redirect to="/" />
							: <Dashboard token={token} setToken={setToken} /> 
								}
					</Route>
					<Route path="/login">
						{token.length > 0 
							? <Redirect to="/dashboard" />
							: <><LoginInput token={token} setToken={setToken} />
							<InfoInput token={token} setToken={setToken} /></>}
					</Route>
					<Route exact path="/">
						{token.length > 0 
							? <Redirect to="/dashboard" />
							:<><InfoInput token={token} setToken={setToken} />
						<LoginInput token={token} setToken={setToken} /></>}
					</Route>
				</Switch>
			</BrowserRouter >
		</>
	);


	// if (token.length > 0) {
	// 	return (
	// 		<div>
	// 			<MyNavbar />
	// 			<Dashboard token={token} setToken={setToken} />
	// 		</div>
	// 	)
	// } else {
	// 	return (
	// 		<>
	// 			<MyNavbar />
	// 			<InfoInput token={token} setToken={setToken} />
	// 			<LoginInput token={token} setToken={setToken} />
	// 		</>
	// 	)
	// }
}


export default App;


// <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/"></Link>
//               </li>
//             </ul>
//           </nav>

//           {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/cart">

//             </Route>
//             <Route path="/">
//             </Route>
//           </Switch>
//         </div>
//       </Router>