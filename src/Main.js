import React from 'react';

export default function Main({toggle}) {
	return (
		<>
			<h1>Hello in example of context</h1>
			<button className="btn btn-success" onClick={toggle}>Show alert</button>
		</>
	)
}
