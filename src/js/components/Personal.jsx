import React from 'react';

import style from '../../css/style.css';

export default class Personal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		return (
			<div id="personal">
				<h3>Personal</h3>
				<ul>
					{data.personal.map((item) => {
						let value;

						if (item.url) {
							value = <a href={item.url}>{item.value}</a>;
						} else {
							value = item.value.split('\n').map((newline) => {
								return <div>{newline}</div>;
							});
						}

						return (
							<li class="row">
								<strong class="column column-20">{item.name}</strong>
								<div class={`${style['sidebar-values']} column column-80`}>
									{value}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
