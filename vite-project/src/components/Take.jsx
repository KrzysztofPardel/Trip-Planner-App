import React, { useState, useEffect } from 'react'
import '/src/scss/Take.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faSoap } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faPills } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'

export const Take = () => {
	return (
		<>
			<div className='container-take'>
				<p className='top-text'>Be responsible and take:</p>
				<div className='carousel-container_take'>
					<div className='documents-container'>
						<button className='btn-documents'>
							<FontAwesomeIcon icon={faFile} />
						</button>
						<span className='span-documents'>Documents</span>
					</div>
					<div className='devices-container'>
						<button className='btn-devices'>
							<FontAwesomeIcon icon={faLaptop} />
						</button>
						<span className='span-devices'>Devices</span>
					</div>
					<div className='hygine-container'>
						<button className='btn-hygine'>
							<FontAwesomeIcon icon={faSoap} />
						</button>
						<span className='span-hygine'>Hygine</span>
					</div>
					<div className='food-container'>
						<button className='btn-food'>
							<FontAwesomeIcon icon={faUtensils} />
						</button>
						<span className='span-food'>Eatables</span>
					</div>
					<div className='medicine-container'>
						<button className='btn-medicine'>
							<FontAwesomeIcon icon={faPills} />
						</button>
						<span className='span-medicine'>Medicine</span>
					</div>
					<div className='can-i_container'>
						<button className='btn-can-i'>
							<FontAwesomeIcon icon={faQuestion} />
						</button>
						<span className='span-can-i'>Can I?</span>
					</div>
					<div className='others-container'>
						<button className='btn-others'>
							<FontAwesomeIcon icon={faGuitar} />
						</button>
						<span className='span-other'>Others</span>
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
				<div className='btn-container'>
					<a href='http://localhost:5173/' className='btn-go_to_login'>
						Go back
					</a>
					<a href='http://localhost:5173/expanses' className='btn-go_to_expanses'>
						Expanes
					</a>
				</div>
				<p className='bottom-text'>So what do you want to take to $trip - destination.value on $trip - date.value?</p>
			</div>
		</>
	)
}
export default Take
