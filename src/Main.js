import React from 'react';
import { useAlert } from './AlertContext';

export default function Main() {
	const {show} = useAlert()
	return (
		<>
			<h1>Hello in example of context</h1>
			<button className="btn btn-success" onClick={() => show('Thit text from main.js')}>Show alert</button>
		</>
	)
}
