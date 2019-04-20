import React, { Component } from 'react';
import BemHelper from 'react-bem-helper'; 
import FormUI from './form_ui'; 
import { sendForm, formValidate } from '../../helpers/index';
import { updateChargersData, formSuccess, formLoading, formError, showErrors, setErrors, setField,setStep }  from '../../actions/index'; 

const classes = new BemHelper({name: 'nav'});

export default class Form_container extends Component{
	constructor(props){
		super(props);	
		this.submitForm = this.submitForm.bind(this);
		this.handlerInput = this.handlerInput.bind(this);
	}
	
	submitForm(e){
		e.preventDefault();
		let { data, formErrors, dispatch } = this.props;
		if(!formErrors.length) {
			dispatch(formLoading(true));
			sendForm(data)
			.then(res => {						
				dispatch(updateChargersData(res));
				dispatch(setStep(2));		
				dispatch(formLoading(false));
			}).catch(res=>{
				dispatch(formLoading(false));
				dispatch(formError(true));
			});
		} else { 
			dispatch(showErrors());		
		}
	}
	
	handlerInput(value, fieldName){
		const { dispatch } = this.props;				
		dispatch(setField({value, fieldName}));
	}

	checkForm(props){
		let { data, showErrors,dispatch }=props;
		formValidate(data).then(res=>{
			if(Object.keys(res).length && showErrors){
				dispatch(setErrors(res));
				dispatch(showErrors());							
			}
		})
	}

	shouldComponentUpdate(nextProps){
  		this.checkForm(nextProps);
		return true;
	}
	
	render() {
		let { data, children, formErrors} = this.props;
		const opt = {
			handlerInput: this.handlerInput,
			submitForm: this.submitForm,
			formErrors,			
			data,
		}
		
		return (<FormUI {...opt} >{ children }</FormUI>);
	}
	
}
