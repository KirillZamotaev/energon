import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import { formValidate } from '../../helpers/index';
import Form from '../form/form_container';
import Field from '../field/field'

const classes = new BemHelper({name: 'form-chargers'});

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
		return (
		<div {...classes('')}>
		 <Form {...classes('first-step')}>
			<Field type="number" placholder/>
			<button type='submit'>NEXT</button>
		</Form>
		</div>
		);
	}
	
}
