import React from 'react';
import Personal from './Personal';
import Skills from './Skills';

import style from '../../css/style.css';

export default class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div className={`${style.sidebar}`}>
				<Personal data={data} />
				<Skills data={data} />
			</div>
		);
	}
}
