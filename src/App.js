import React, { useEffect, useState } from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom'
import InfoInput from './components/InfoInput'
import LoginInput from './components/LoginInput'
import Dashboard from './components/Dashboard'

// import axios from 'axios'

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


  // needs onChange - including token being added
  if (token.length > 0) {
    return (
      <div>
        <Dashboard token={token} setToken={setToken} />
      </div>
    )
  } else {
    return (
      <>
        <InfoInput token={token} setToken={setToken} />
        <LoginInput token={token} setToken={setToken} />
      </>
    )
  }
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