import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import './field.sass';
const classes = new BemHelper({name: 'field'});

export default class Field extends Component {
	
	render(){
		let { indicator, className }= this.props;
		
		return (
			<div className={`field ${className}`}>
				<input {...this.props} value={this.props.value} {...classes('input')} placeholder={this.props.placeholder}/>
				<span className={`field__indicator field__indicator--${ indicator }`}/> 
			</div>
		);
	}
}
