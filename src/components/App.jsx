import { useState } from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '/src/components/Login.jsx'
import Take from '/src/components/Take.jsx'
import Expanses from '/src/components/Expanses.jsx'
import Weather from '/src/components/Weather.jsx'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/take' element={<Take />} />
				<Route path='/expanses' element={<Expanses />} />
				<Route path='/weather' element={<Weather />} />
			</Routes>
		</Router>
	)
}
export default App
