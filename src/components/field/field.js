import React, { Component } from 'react';

export default class Field extends Component {
	
	render(){
		let { value, onChange, validated, type, pattern, autoComplete } = this.props
		let opt = { type, value, onChange, autoComplete }
		return (<input {...opt} />);
	}
}
