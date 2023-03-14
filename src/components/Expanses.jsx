import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
import { v4 as uuidv4 } from 'uuid'
const object = {
	id: 1,
	product: 'another item to buy',
	done: false,
}
export const Expanses = () => {
	const [todo, setTodo] = useState([object])
	const [product, setProduct] = useState('')
	const handleAdd = event => {
		event.preventDefault()
		const newToDo = todo.concat({ product, id: uuidv4() })
		setTodo(newToDo)
		setProduct('')
	}

	return (
		<>
			<div className='container-expanses'>
				<p className='top-text'>Be responsible and buy:</p>
				<div className='carousel-container_expanses'>
					<div className='housing-container'>
						<button className='btn-housing'>
							<FontAwesomeIcon icon={faHouse} />
						</button>
						<span className='span-housing'>Housing</span>
					</div>
					<div className='transport-container'>
						<button className='btn-transport'>
							<FontAwesomeIcon icon={faBus} />
						</button>
						<span className='span-transport'>Transport</span>
					</div>
					<div className='eatables-container'>
						<button className='btn-eatables'>
							<FontAwesomeIcon icon={faUtensils} />
						</button>
						<span className='span-eatables'>Eatables</span>
					</div>
					<div className='entertainment-container'>
						<button className='btn-entertainment'>
							<FontAwesomeIcon icon={faTrophy} />
						</button>
						<span className='span-entertainment'>Entertainment</span>
					</div>
					<div className='souvenirs-container'>
						<button className='btn-souvenirs'>
							<FontAwesomeIcon icon={faGlobeEurope} />
						</button>
						<span className='span-souvenirs'>Souvenirs</span>
					</div>
					<div className='health_container'>
						<button className='btn-health'>
							<FontAwesomeIcon icon={faUserNurse} />
						</button>
						<span className='span-health'>Health</span>
					</div>
					<div className='others-container'>
						<button className='btn-others'>
							<FontAwesomeIcon icon={faPaperPlane} />
						</button>
						<span className='span-others'>Others</span>
					</div>
				</div>
				<div className='list-container'>
					<div className='container-take_box'>
						<div className='container-take_header'>
							<h2 className='header_expanses'>Buy</h2>
							<div className='line'></div>
						</div>
						<div className='container-expanses_input'>
							<input
								type='text'
								placeholder='ex. Passport'
								value={product}
								onChange={e => setProduct(e.target.value)}
								className='input-add_take'></input>
							<button onClick={handleAdd} className='btn-add_take'>
								Add it!
							</button>
						</div>
					</div>

					{/* //po takich li będzie mapowane */}
					<ul className='list-to_take'>
						{todo.map(element => (
							<li key={element.id} className='element'>
								<label className='checkbox-label' />
								<input className='checkbox-input' type='checkbox' />
								{element.product}
								{/* <input className='input-to_take' type='text' /> */}
								<button className='btn-edit'>
									<FontAwesomeIcon icon={faFile} />
								</button>
								<button className='btn-delete'>
									<FontAwesomeIcon icon={faX} />
								</button>
							</li>
						))}
						{/* <li className='element'>
							<label className='checkbox-label' />
							<input className='checkbox-input' type='checkbox' />
							<input className='input-to_expanses' type='text' />
							<button className='btn-edit'>
								<FontAwesomeIcon icon={faFile} />
							</button>
							<button className='btn-delete'>
								<FontAwesomeIcon icon={faX} />
							</button>
						</li> */}
					</ul>
				</div>
				<div className='btn-container'>
					<Link to='/take' className='btn-go_to_take'>
						Take
					</Link>
					<Link to='/weatherapp' className='btn-go_to_weather'>
						Weather
					</Link>
				</div>
				<p className='bottom-text'>
					So what do you want to buy when at the trip to $trip - destination.value on $trip - date.value?
				</p>
			</div>
		</>
	)
}
export default Expanses
