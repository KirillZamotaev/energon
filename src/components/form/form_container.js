import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import { formValidate } from '../../helpers/index';
import FormUI from './form_ui';

const classes = new BemHelper({name: 'nav'});

export default class Nav_container extends Component{
	constructor(props){
		super(props);	
		this.submitForm = this.submitForm.bind(this);
		this.handlerInput = this.handlerInput.bind(this);
	}
	
	submitForm(e){
		
		
	}
	
	handlerInput(value, fieldName){
		
	}
	
	render(){
		const opt = {
			handlerInput: this.handlerInput,
			submitForm: this.submitForm,
			data: this.props.data
		}
		
		return (<FormUI {...opt} />);
	}
	
}