import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import './list-chargers.sass';
const classes = new BemHelper({name: 'list-chargers'});

export default class ListChargersContainer extends Component{

	render() {
		let { data, settings } = this.props;
		return (
			<div {...classes()}>
				 <h2 {...classes('header')}>Your charging stations</h2>
				<div {...classes('container')} >
									
				</div>		
			</div>
		)
	}
	
}


