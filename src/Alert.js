import React, {useContext} from 'react';
import { useAlert } from './AlertContext';

export default function Alert() {
	const {visible, hide, text} = useAlert();
	if(!visible) return null;
	return (
		<div className="alert alert-danger" onClick={hide}>
			{text}
		</div>
	)
}
