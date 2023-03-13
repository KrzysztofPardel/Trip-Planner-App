import React from 'react'
import Example from '/src/components/Example.jsx'
const ExampleTwo = ({ destination }) => {
	console.log(destination)
	return (
		<>
			<p className='result'>Your destination: {destination}</p>
		</>
	)
}

export default ExampleTwo
