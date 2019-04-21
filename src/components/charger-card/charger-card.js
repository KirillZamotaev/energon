import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import charger from '../../img/charger.png';
import './charger-card.sass';

const classes = new BemHelper({name: 'charger-card'});


export default class ChargerCard extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		const { data }  = this.props;
		return (
			<div {...classes('')}>
				<div {...classes('charger')} >
					<img src={charger} alt={'charger'} title={'charger'} />				
				</div>
				<div {...classes('description')} >
					Your charging station is { data.name }
				</div>
			</div>
		)
	}
} 
