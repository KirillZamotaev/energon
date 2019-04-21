import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import Form from '../form/form_container';
import Field from '../field/field'
import ChargerCard from '../charger-card/charger-card'
import { connect }  from 'react-redux'; 
import { updateChargersData, updateChargerData, formSuccess, formLoading, formError, showErrors, setErrors, setField, showError }  from '../../actions/index'; 
import { sendForm, formValidate } from '../../helpers/index';

import './form-chargers.sass';

const classes = new BemHelper({name: 'form-chargers'});

class Tooltip extends Component {
	render(){
		return(
			<span className="tooltip" >	
				<i className="tooltip__icon" />
				<span className="tooltip__text">
					{this.props.children}		
				</span>
			</span>
		)
	}
}

class FormChargers extends Component{
	constructor(props){
		super(props);
		this.handlerStatus = this.handlerStatus.bind(this);
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
				if(res){
					dispatch(updateChargersData(res));	
					dispatch(formLoading(false));
				} else {	
					dispatch(showError('Invalid Serial Number'));
				}				
			}).catch(res=>{
				dispatch(formLoading(false));
				dispatch(formError(true));
			});
		} else { 
			dispatch(showErrors());		
		}
	}
	
	handlerInput(e){
		const { dispatch } = this.props;
		let { value, name } = e.target;				
		dispatch(setField({[name]: value}));
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


	handlerStatus(success, error, loading){
		let statusClass = 'none';		
		if(success && !error && !loading){
			statusClass = 'success';
		} else if(!success && !error && loading) {
			statusClass = 'loading';
		} else if(!success && error && !loading) {
			statusClass = 'error';
		}

		return statusClass;
	}	

	render(){
		let  { data, loading, error, success, formErrors, chargerData, dispatch } = this.props;
		let opt =  { data, loading, error, success, formErrors, dispatch, chargerData,handlerInput: this.handlerInput, submitForm: this.submitForm };

		return (
		<div {...classes('')}>
			<div {...classes('wrapper')}>
				<h2>Add charging station</h2>
				<div {...classes('description')} >
					<p {...classes('description-text')}>
						Enter serial number of your charging station.
						<Tooltip>You can find serial number on your invoice or on the right side of your charging station.</Tooltip>					
					</p>	
				</div>				 
				<Form {...classes('instance')}  {...opt}>
					<Field 
						type="text" 
						name="serial_number" 
						{...classes('serial_number')}  
						placeholder={'e.g 02341932'}
						indicator={this.handlerStatus(data, loading, error)} 
					/>
					{ chargerData && (<ChargerCard data={chargerData} />) }
					<button type='submit' {...classes('btn', ['main'])}>{ chargerData ? 'Add' : 'Next'}</button>
				</Form>
			</div>
		</div>
		);
	}
	
}

const mapStateToProps = (state) => {
  let  { data, loading, error, success, formErrors } = state.state.form; 
  return { data, loading, error, success, formErrors };
}

export default connect(mapStateToProps)(FormChargers);
