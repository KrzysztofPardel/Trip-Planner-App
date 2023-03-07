import React, { useState, useEffect } from 'react'
import '/src/scss/Expanses.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
export const Expanses = () => {
	return (
		<>
			<div className='container-expanses'>
				<p className='top-text'>Be responsible and buy:</p>
				<div className='carousel-container'>
					<div className='housing-container'>
						<buttom className='btn-housing'></buttom>
						<span className='span-housing'>Housing</span>
					</div>
					<div className='transport-container'>
						<buttom className='btn-transport'></buttom>
						<span className='span-transport'>Transport</span>
					</div>
					<div className='eatables-container'>
						<buttom className='btn-eatables'></buttom>
						<span className='span-eatables'>Eatables</span>
					</div>
					<div className='entertainment-container'>
						<buttom className='btn-entertainment'></buttom>
						<span className='span-entertainment'>Entertainment</span>
					</div>
					<div className='souvenirs-container'>
						<buttom className='btn-souvenirs'></buttom>
						<span className='span-souvenirs'>Souvenirs</span>
					</div>
					<div className='health_container'>
						<buttom className='btn-health'></buttom>
						<span className='span-health'>Health</span>
					</div>
					<div className='others-container'>
						<buttom className='btn-others'></buttom>
						<span className='span-others'>Others</span>
					</div>
				</div>
				<div className='list-container'>
					<h2 className='header_take'>Buy</h2>
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
				<p className='bottom-text'>
					So what do you want to buy when at the trip to $trip - destination.value on $trip - date.value?
				</p>
			</div>
		</>
	)
}
export default Expanses
