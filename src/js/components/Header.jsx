import React from 'react';

import style from '../../css/style.css';

export default function Header(props) {
	const { data } = props;

	return (
		<div className="row">
			<div className={`${style.header}`}>
				<h1><span className={`${style.name}`}>{data.name}</span></h1>
				<h3 className={`${style['job-title']} row`}>{data.jobTitle}</h3>
			</div>
		</div>
	);
}
