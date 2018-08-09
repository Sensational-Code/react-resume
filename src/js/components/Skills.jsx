import React from 'react';

import style from '../../css/style.css';

export default class Skills extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
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
		);
	}
}