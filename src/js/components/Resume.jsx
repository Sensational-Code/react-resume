import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

import data from '../../data/data';

import style from '../../css/style.css';

export default function Resume() {
	return (
		<div className={style.resume}>
			<Header data={data} />
			<div className="row">
				<Sidebar data={data} />
				<Main data={data} />
			</div>
		</div>
	);
}
