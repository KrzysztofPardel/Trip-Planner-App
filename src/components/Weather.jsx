import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '/src/scss/Weather.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
export const Weather = () => {
	return (
		<>
			<div className='container-weather'>
				<div className='btn-container_top'>
					<div className='day-container'>
						<button className='btn-day'>
							<FontAwesomeIcon icon={faSun} />
						</button>
						<span className='span-day'>Day</span>
					</div>
					<div className='week-container'>
						<button className='btn-week'>
							<FontAwesomeIcon icon={faCalendarPlus} />
						</button>
						<span className='span-week'>Week</span>
					</div>
				</div>
				<p className='top-text'>As for the weather, you can expect</p>
				<input type='text' className='input-temperature' />
				<p className='bottom-text'>on the day of your arrival!</p>
			</div>
			<div className='btn-container_bottom'>
				<Link to='/' className='btn-go_to_login'>
					Login
				</Link>
				<Link to='/expanses' className='btn-go_to_expanses'>
					Expanses
				</Link>
				<Link to='/take' className='btn-go_to_take'>
					Take
				</Link>
			</div>
		</>
	)
}
export default Weather
