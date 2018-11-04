import React from 'react';
import Personal from './Personal';
import Skills from './Skills';

import style from '../../css/style.css';

export default function Resume(props) {
	const { data } = props;

	return (
		<div className={`${style.sidebar}`}>
			<Personal data={data} />
			<Skills data={data} />
		</div>
	);
}
