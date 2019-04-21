import React, { Component, cloneElement, Children } from 'react';
import BemHelper from 'react-bem-helper';
import { formValidate } from '../../helpers/index';
import ErrorOutput from '../error-output/index';
import './form.sass';

const classes = new BemHelper({name: 'form-validate'});

export default class FormUI extends Component{
	constructor(props){
		super(props);	
	}
	
	render(){

		let { data, submitForm, handlerInput, getFields, placeholder, className } =this.props;
		let opt = { onChange: handlerInput, placeholder: placeholder}
		return (
			<form onSubmit={submitForm} {...classes('')}  className={className}>
				{ Children.map(this.props.children,child => {
					if(child){					
						let { name } = child.props;
						opt.value = data ? data[name] : ''; 
						return cloneElement(child, opt)
					}				
				}) }
			</form>
		);
	}
	
}
