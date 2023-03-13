import { useState } from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from '/src/components/Login.jsx'
import Take from '/src/components/Take.jsx'
import Expanses from '/src/components/Expanses.jsx'
import Weather from '/src/components/Weather.jsx'
import WeatherApp from '/src/components/WeatherApp.jsx'
import Example from '/src/components/Example.jsx'
import ExampleTwo from '/src/components/ExampleTwo.jsx'

const App = () => {
	const [destination, setDestination] = useState('')
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login destination={destination} />} />
				<Route path='/take' element={<Take callback={setDestination} />} />
				<Route path='/expanses' element={<Expanses />} />
				<Route path='/weather' element={<Weather />} />
				<Route path='/weatherapp' element={<WeatherApp />} />
				<Route path='/example' element={<Example setDestination={setDestination} />} />
				<Route path='/exampletwo' element={<ExampleTwo destination={destination} />} />
			</Routes>
		</Router>
	)
}
export default App
