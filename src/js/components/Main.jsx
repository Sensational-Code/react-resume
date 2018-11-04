import React from 'react';
import Projects from './Projects';

import style from '../../css/style.css';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
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
}
