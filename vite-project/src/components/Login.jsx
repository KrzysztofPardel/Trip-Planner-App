import React, { useState, useEffect } from 'react'
import '/src/scss/Login.scss'
import globe from './globe.json'
import backpack from './backpack.json'
import Lottie from 'lottie-react'
const Login = () => {
	return (
		<>
			<div className='container-login'>
				<div className='welcome-container'>
					<span className='welcome-top'>Welcome to</span>
					<span className='welcome-middle'>Trip Planner App</span>
					<span className='welcome-bottom'>Plan well . Enjoy more .</span>
				</div>
				<Lottie animationData={backpack} />

				<div className='box'>
					<input className='name' type='text' placeholder='What is your name?'></input>
					<input className='trip-date' type='date' placeholder='When are you planning to travel?'></input>
					<input className='trip-destination' type='text' placeholder='What is your trip destination?'></input>
					<div className='button-container'>
						<a href='http://localhost:5173/take' className='submit'>
							Ok, let's go!
						</a>
					</div>
				</div>
				<p className='quote'>
					"The world is a book, and those who don’t travel read only a page."
					<p className='quote-author'></p>
				</p>
				<div className='background'></div>
			</div>
		</>
	)
}

export default Login
