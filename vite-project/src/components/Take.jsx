import React, { useState, useEffect } from 'react'
import '/src/scss/Take.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
// import { faLaptop } from '@fortawesome/free-regular-svg-icons'

export const Take = () => {
	return (
		<>
			<div className='container-take'>
				<p className='top-text'>Be responsible and take:</p>
				<div className='carousel-container'>
					<div className='documents-container'>
						<buttom className='btn-documents'>
							<FontAwesomeIcon icon={faFile} />
						</buttom>
						<span className='span-documents'>Documents</span>
					</div>
					<div className='devices-container'>
						<buttom className='btn-devices'>{/* <FontAwesomeIcon icon={faLaptop} /> */}</buttom>
						<span className='span-devices'>Devices</span>
					</div>
					<div className='hygine-container'>
						I<buttom className='btn-hygine'></buttom>
						<span className='span-hygine'>Hygine</span>
					</div>
					<div className='eatables-container'>
						I<buttom className='btn-eatables'></buttom>
						<span className='span-eatables'>Eatables</span>
					</div>
					<div className='medicine-container'>
						I<buttom className='btn-medicine'></buttom>
						<span className='span-medicine'>Medicine</span>
					</div>
					<div className='can-i_container'>
						I<buttom className='btn-can-i'></buttom>
						<span className='span-can-i'>Can I take?</span>
					</div>
					<div className='others-container'>
						I<buttom className='btn-others'></buttom>
						<span className='span-others'>Others</span>
					</div>
				</div>
				<div className='list-container'>
					<h2 className='header_take'>Take</h2>
					<div className='line'></div>
					{/* //po takich li będzie mapowane */}
					<ul className='list-to_take'>
						<li className='element'>
							<label className='checkbox-label' />
							<input className='checkbox-input' type='checkbox' />
							<input className='input-to_take' type='text' />
							<button className='btn-edit'>
								<FontAwesomeIcon icon={faFile} />
							</button>
							<button className='btn-delete'>
								<FontAwesomeIcon icon={faX} />
							</button>
						</li>
						<li className='element'>
							<label className='checkbox-label' />
							<input className='checkbox-input' type='checkbox' />
							<input className='input-to_take' type='text' />
							<button className='btn-edit'>
								<FontAwesomeIcon icon={faFile} />
							</button>
							<button className='btn-delete'>
								<FontAwesomeIcon icon={faX} />
							</button>
						</li>
						<li className='element'>
							<label className='checkbox-label' />
							<input className='checkbox-input' type='checkbox' />
							<input className='input-to_take' type='text' />
							<button className='btn-edit'>
								<FontAwesomeIcon icon={faFile} />
							</button>
							<button className='btn-delete'>
								<FontAwesomeIcon icon={faX} />
							</button>
						</li>
					</ul>
				</div>
				<p className='bottom-text'>So what do you want to take to $trip - destination.value on $trip - date.value?</p>
			</div>
		</>
	)
}
export default Take
