import { useState } from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import './scss/App.scss'
// import reactLogo from './assets/react.svg'

import Login from '/src/components/Login.jsx'
import Take from '/src/components/Take.jsx'
import Expanses from '/src/components/Expanses.jsx'
import Weather from '/src/components/Weather.jsx'

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/take' element={<Take />} />
					<Route path='/expanses' element={<Expanses />} />
					<Route path='/weather' element={<Weather />} />
				</Routes>
			</Router>
		</>
	)
}
export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }
