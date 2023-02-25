import React from 'react'
import './Input.css'

function input({ type, placeholder, onChange }) {
	return (
		<div>
			<input className='input' type={type} placeholder={placeholder} onChange={onChange} />
		</div>
	)
}

export default input
