import React, { Component } from 'react';
import BemHelper from 'react-bem-helper'; 
import FormUI from './form_ui'; 

const classes = new BemHelper({name: 'nav'});

export default class Form_container extends Component{

	
	render() {
		let { data, children, formErrors, loading, error, success, className, handlerInput, submitForm} = this.props;
		const opt = {
			handlerInput,
			submitForm,
			formErrors,			
			data,
			className
		}
		
		return (<FormUI {...opt} >{ children }</FormUI>);
	}
	
}
