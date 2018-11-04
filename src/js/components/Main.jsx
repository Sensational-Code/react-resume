import React from 'react';
import Projects from './Projects';

import style from '../../css/style.css';

export default function Main(props) {
	const { data } = props;

	return (
		<div className={`${style.main} column column-67`}>
			<div id="overview">
				<h3>{data.overview.name}</h3>
				<p>{data.overview.value}</p>
			</div>

			<Projects data={data} />

		</div>
	);
}
