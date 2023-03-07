import React, { useState, useEffect } from 'react'
import Login from './Login'
import { FontAwesome } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'

export const Take = () => {
	return (
		<>
			<div className='container'>
				<p>Be responsible and take:</p>
				<div className='carousel-container'>
					<div className='documents-container'>
						<bottom className='documents'></bottom>
						<span className='documents'></span>
					</div>
					<div className='devices-container'>
						<bottom className='devices'></bottom>
						<span className='devices'></span>
					</div>
					<div className='hygine-container'>
						<bottom className='hygine'></bottom>
						<span className='hygine'></span>
					</div>
					<div className='eatables-container'>
						<bottom className='eatables'></bottom>
						<span className='eatables'></span>
					</div>
					<div className='medicine-container'>
						<bottom className='medicine'></bottom>
						<span className='medicine'></span>
					</div>
					<div className='can-i_container'>
						<bottom className='can-i'></bottom>
						<span className='can-i'></span>
					</div>
					<div className='medicine-container'>
						<bottom className='medicine'></bottom>
						<span className='medicine'></span>
					</div>
					<div className='others-container'>
						<bottom className='fa-regular fa-file'>{/* <FontAwesomeIcon icon='fa-regular fa-file' /> */}</bottom>
						<span className='others'></span>
					</div>
				</div>
				<div className='take-container'>
					<p className='take'>Take</p>
					<div className='line'></div>
					{/* //po takich li będzie mapowane */}
					<ul className='to-take_list'>
						<li className='element'>
							<label className='checkbox' />
							<input className='checkbox' type='checkbox' />
							<input className='to-take' type='text' />
							<button className='edit'>E</button>
							<button className='delete'>D</button>
						</li>
					</ul>
					<p className='bottom-text'>So what do you want to take to $trip - destination.value on $trip - date.value?</p>
				</div>
			</div>
		</>
	)
}
export default Take
