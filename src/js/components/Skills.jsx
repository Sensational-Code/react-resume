import React from 'react';

import style from '../../css/style.css';

export default function Skills(props) {
	const { data } = props;

	return (
		<div id="skills">
			<h3>Skills</h3>
			{data.skills.map((item) => {
				const widthStyle = {
					width: `${item.value}%`,
					backgroundColor: item.color || 'blue',
				};
				return (
					<div className={style['skill-item']}>
						{item.name}
						<div className={style['progress-bar-outer']}>
							<div className={style['progress-bar-inner']} style={widthStyle} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
