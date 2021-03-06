import React from 'react';

import style from '../../css/style.css';

export default function Personal(props) {
	const { data } = props;

	return (
		<div id="personal">
			<h3>Personal</h3>
			<ul>
				{data.personal.map((item) => {
					let value;

					if (item.url) {
						value = <a href={item.url}>{item.value}</a>;
					} else {
						value = item.value.split('\n').map(newline => (
							<div>{newline}</div>
						));
					}

					return (
						<div>
							<strong>{item.name}</strong>
							<div className={`${style['sidebar-values']}`}>
								{value}
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
