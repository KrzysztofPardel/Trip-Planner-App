import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '/src/scss/Login.scss'
// import globe from './globe.json'
import backpack from './backpack.json'
import Lottie from 'lottie-react'
const backpackStyle = {
	margin: '2em',
}
const Login = ({ callback }) => {
	const [name, setName] = useState('')
	const [date, setDate] = useState('')
	const [destination, setDestination] = useState('')

	return (
		<>
			<div className='container-login'>
				<div className='welcome-container'>
					<span className='welcome-top'>Welcome to</span>
					<span className='welcome-middle'>Trip Planner App</span>
					<span className='welcome-bottom'>Plan well . Enjoy more .</span>
				</div>
				<div className='animation-backpack'>
					<Lottie animationData={backpack} style={backpackStyle} />
				</div>
				<div className='box'>
					<input
						className='name'
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='What is your name?'></input>
					<input
						className='trip-date'
						type='date'
						value={date}
						onChange={e => setDate(e.target.value)}
						placeholder='When are you planning to travel?'></input>
					<input
						className='trip-destination'
						type='text'
						value={destination}
						onChange={e => setDestination(e.target.value)}
						placeholder='What is your trip destination?'></input>
					<div className='button-container'>
						<Link to='/take' className='btn-lets_go' onClick={() => callback(setDestination(e.target.value))}>
							Ok, let's go!
						</Link>
					</div>
				</div>
				<p className='quote'>
					"The world is a book, and those who don’t travel read only a page."
					<p className='quote-author'>St.Augustin</p>
				</p>
				<div className='background'></div>
			</div>
		</>
	)
}

export default Login
