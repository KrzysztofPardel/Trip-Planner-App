import React, { useState } from 'react'
import ExampleTwo from '/src/components/ExampleTwo.jsx'
const Example = ({ setDestination }) => {
	const [query, setQuery] = useState('')
	const handleAdd = e => {
		e.preventDefault()
		setDestination(query)
	}
	console.log(query)

	return (
		<form>
			<input type='text' value={query} onChange={e => setQuery(e.target.value)} className='destination' />
			<button className='submit' type='submit' onSubmit={handleAdd}>
				Submit
			</button>
		</form>
	)
}
export default Example
