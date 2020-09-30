import React, {useContext} from 'react';
import { useAlert } from './AlertContext';

export default function Alert() {
	const {visible, toggle} = useAlert();
	if(!visible) return null;
	return (
		<div className="alert alert-danger" onClick={toggle}>
			It's a very important message!
		</div>
	)
}
