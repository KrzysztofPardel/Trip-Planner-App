import React, { useState, useEffect } from 'react'
import '/src/scss/Expanses.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const Expanses = () => {
	return (
		<>
			<div className='container-expanses'>
				<p className='top-text'>Be responsible and buy:</p>
				<div className='carousel-container_expanses'>
					<div className='housing-container'>
						<buttom className='btn-housing'>
							<FontAwesomeIcon icon={faHouse} />
						</buttom>
						<span className='span-housing'>Housing</span>
					</div>
					<div className='transport-container'>
						<buttom className='btn-transport'>
							<FontAwesomeIcon icon={faBus} />
						</buttom>
						<span className='span-transport'>Transport</span>
					</div>
					<div className='eatables-container'>
						<buttom className='btn-eatables'>
							<FontAwesomeIcon icon={faUtensils} />
						</buttom>
						<span className='span-eatables'>Eatables</span>
					</div>
					<div className='entertainment-container'>
						<buttom className='btn-entertainment'>
							<FontAwesomeIcon icon={faTrophy} />
						</buttom>
						<span className='span-entertainment'>Entertainment</span>
					</div>
					<div className='souvenirs-container'>
						<buttom className='btn-souvenirs'>
							<FontAwesomeIcon icon={faGlobeEurope} />
						</buttom>
						<span className='span-souvenirs'>Souvenirs</span>
					</div>
					<div className='health_container'>
						<buttom className='btn-health'>
							<FontAwesomeIcon icon={faUserNurse} />
						</buttom>
						<span className='span-health'>Health</span>
					</div>
					<div className='others-container'>
						<buttom className='btn-others'>
							<FontAwesomeIcon icon={faPaperPlane} />
						</buttom>
						<span className='span-others'>Others</span>
					</div>
				</div>
				<div className='list-container'>
					<h2 className='header_expanses'>Buy</h2>
					<div className='line'></div>
					{/* //po takich li będzie mapowane */}
					<ul className='list-to_take'>
						<li className='element'>
							<label className='checkbox-label' />
							<input className='checkbox-input' type='checkbox' />
							<input className='input-to_expanses' type='text' />
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
							<input className='input-to_expanses' type='text' />
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
							<input className='input-to_expanses' type='text' />
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
					<a href='http://localhost:5173/take' className='btn-go_to_take'>
						Take
					</a>
					<a href='http://localhost:5173/weather' className='btn-go_to_weather'>
						Weather
					</a>
				</div>
				<p className='bottom-text'>
					So what do you want to buy when at the trip to $trip - destination.value on $trip - date.value?
				</p>
			</div>
		</>
	)
}
export default Expanses
