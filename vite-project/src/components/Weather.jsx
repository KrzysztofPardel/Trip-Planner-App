import React, { useState, useEffect } from 'react'
import '/src/scss/Weather.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
export const Weather = () => {
	return (
		<>
			<div className='container-weather'>
				<div className='buttons-container'>
					<div className='housing-container'>
						<buttom className='btn-housing'></buttom>
						<span className='span-housing'>Housing</span>
					</div>
					<div className='transport-container'>
						<buttom className='btn-transport'></buttom>
						<span className='span-transport'>Transport</span>
					</div>
				</div>
				<p className='top-text'>As for the weather, you can expect</p>
				<input type='text' className='input-temperature' />
				<p className='bottom-text'>on the day of your arrival!</p>
			</div>
		</>
	)
}
export default Weather
