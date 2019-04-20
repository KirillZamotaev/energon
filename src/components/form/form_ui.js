import React, { Component, cloneElement, Children } from 'react';
import BemHelper from 'react-bem-helper';
import { formValidate } from '../../helpers/index';
import ErrorOutput from '../error-output/error-output';
import './form.sass';

const classes = new BemHelper({name: 'form-validate'});

export default class FormUI extends Component{
	constructor(props){
		super(props);	
		this.submitForm = this.submitForm.bind(this);
		this.handlerInput = this.handlerInput.bind(this);
	}
	
	render(){

		let { opt } =this.props
		return (
			<form onSumbit={} {...classes('')}>
				{ Children.map((child, idx)=>{
					return cloneElement(child, opt)				
				}) }
			</form>
		);
	}
	
}
