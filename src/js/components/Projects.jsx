import React from 'react';

import style from '../../css/style.css';

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div id="projects">
				<h3>Projects</h3>
				{data.projects.map((item) => {
					return (
						<div className="column">
							<strong className="row">{item.name}</strong>
							<p className="row">{item.value}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
