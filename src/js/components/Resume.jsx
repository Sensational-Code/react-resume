import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

import data from '../../data/data';

import style from '../../css/style.css';

export default class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class={`${style.resume} row`}>
				<Sidebar data={data}></Sidebar>
				<Main data={data}></Main>
			</div>
		);
	}
}
