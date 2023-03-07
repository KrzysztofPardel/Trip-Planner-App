import React, { useState, useEffect } from 'react'
import '/src/scss/Login.scss'
const Login = () => {
	return (
		<>
			<div className='container-login'>
				<h1 className='welcome-header'>Welcome to Trip Planner App!</h1>
				<p className='quote'>
					The world is a book, and those who don’t travel read only a page."
					<p className='quote-author'>St. Augustine</p>
				</p>
				<div className='box'>
					<input className='name' type='text' placeholder='What is your name?'></input>
					<input className='trip-date' type='date' placeholder='When are you planning to travel?'></input>
					<input className='trip-destination' type='text' placeholder='What is your trip destination?'></input>
				</div>
			</div>
		</>
	)
}

export default Login
