import React, { useState, useEffect } from 'react'
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
						<buttom className='btn-day'>
							<FontAwesomeIcon icon={faSun} />
						</buttom>
						<span className='span-day'>Day</span>
					</div>
					<div className='week-container'>
						<buttom className='btn-week'>
							<FontAwesomeIcon icon={faCalendarPlus} />
						</buttom>
						<span className='span-week'>Week</span>
					</div>
				</div>
				<p className='top-text'>As for the weather, you can expect</p>
				<input type='text' className='input-temperature' />
				<p className='bottom-text'>on the day of your arrival!</p>
			</div>
			<div className='btn-container_bottom'>
				<a href='http://localhost:5173/' className='btn-go_to_login'>
					Login
				</a>
				<a href='http://localhost:5173/expanses' className='btn-go_to_expanses'>
					Expanses
				</a>
				<a href='http://localhost:5173/take' className='btn-go_to_take'>
					Take
				</a>
			</div>
		</>
	)
}
export default Weather
