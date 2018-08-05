import React from 'react';

import style from '../../css/style.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div class="row">
				<div class={`${style.header}`}>
					<h1><span class={`${style.name}`}>{data.name}</span></h1>
					<h3 class={`${style['job-title']} row`}>{data.jobTitle}</h3>
				</div>
			</div>
		);
	}
}
