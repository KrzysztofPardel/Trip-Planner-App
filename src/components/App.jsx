import { useState } from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '/src/components/Login.jsx'
import Take from '/src/components/Take.jsx'
import TakeList from '/src/components/ToTakeList.jsx'
import Expanses from '/src/components/Expanses.jsx'
import Weather from '/src/components/Weather.jsx'
import WeatherApp from '/src/components/WeatherApp.jsx'
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/take' element={<Take />} />
				<Route path='/takelist' element={<TakeList />} />
				<Route path='/expanses' element={<Expanses />} />
				<Route path='/weather' element={<Weather />} />
				<Route path='/weatherapp' element={<WeatherApp />} />
			</Routes>
		</Router>
	)
}
export default App
