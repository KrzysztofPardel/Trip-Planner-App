import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '/src/scss/Take.scss'
import Login from '/src/components/Login.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faSoap } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faPills } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'

//dzięki temu nadajemy potem unikalne id każdemu elementowi z listy
const object = {
	id: 1,
	item: 'Another item to take',
	done: false,
}
export const Take = () => {
	const [todo, setTodo] = useState([object])
	const [item, setItem] = useState('')
	const handleAdd = event => {
		event.preventDefault()
		const newToDo = todo.concat({ item, id: uuidv4(), done: true })
		setTodo(newToDo)
		setItem('')
	}

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
					<div className='container-take_box'>
						<div className='container-take_header'>
							<h2 className='header_take'>Take</h2>
							<div className='line'></div>
						</div>
						<div className='container-take_input'>
							<input
								type='text'
								placeholder='ex. Passport'
								value={item}
								onChange={e => setItem(e.target.value)}
								className='input-add_take'></input>
							<button onClick={handleAdd} className='btn-add_take'>
								Add it!
							</button>
						</div>
					</div>

					<ul className='list-to_take'>
						{todo.map(element => (
							<li key={element.id} className='element'>
								<label className='checkbox-label' />
								<input className='checkbox-input' type='checkbox' />
								{element.item}
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
							<input className='input-to_take' type='text' />
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
					<Link to='/' className='btn-go_to_login'>
						Go back
					</Link>
					<Link to='/expanses' className='btn-go_to_expanses'>
						Expanes
					</Link>
				</div>
				<p className='bottom-text'>So what do you want to take to __________ on $trip - date.value?</p>
			</div>
		</>
	)
}
export default Take
