import ReactDOM from 'react-dom/client'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
