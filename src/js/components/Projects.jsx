import React from 'react';

export default function Projects(props) {
	const { data } = props;

	return (
		<div id="projects">
			<h3>Projects</h3>
			{data.projects.map(item => (
				<div className="column">
					<strong className="row">{item.name}</strong>
					<p className="row">{item.value}</p>
				</div>
			))}
		</div>
	);
}
