import React from 'react';
import InfoInput from './components/InfoInput'
import LoginInput from './components/LoginInput'
// import axios from 'axios'

function App() {

  return (
    <div className="App">
      <InfoInput />
      <LoginInput />
    </div>
  );
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
//               <Cart />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>