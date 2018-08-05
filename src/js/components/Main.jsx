import React from 'react';

import style from '../../css/style.css';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div class={`${style.main} column column-67`}>
				<div id="overview">
					<h3>{data.overview.name}</h3>
					<p>{data.overview.value}</p>
				</div>

				<div id="projects">
					<h3>Projects</h3>
					{data.projects.map((item) => {
						return (
							<div class="column">
								<strong class="row">{item.name}</strong>
								<p class="row">{item.value}</p>
							</div>
						);
					})}
				</div>

				<div id="skills">
					<h3>Skills</h3>
					{data.skills.map((item) => {
						const widthStyle = {
							width: `${item.value}%`,
							backgroundColor: item.color || 'blue',
						};
						return (
							<div class={style['skill-item']}>
								{item.name}
								<div class={style['progress-bar-outer']}>
									<div class={style['progress-bar-inner']} style={widthStyle}></div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
