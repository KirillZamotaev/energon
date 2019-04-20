import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import { formValidate } from '../../helpers/index';
import Form from '../form/form_container';
import Field from '../field/field'
import { connect }  from 'react-redux'; 

const classes = new BemHelper({name: 'form-chargers'});

class FormChargers extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		let  { data, pending, error, success, formErrors, dispatch } = this.props;
		let opt =  { data, pending, error, success, formErrors, dispatch };

		return (
		<div {...classes('')}>
		 <Form {...classes('first-step')}  {...opt}>
			<Field type="number" name="" placholder={'e.g 02341932'} />
			<button type='submit'>NEXT</button>
		</Form>
		</div>
		);
	}
	
}

const mapStateToProps = (state) => {
  let  { data, pending, error, success, formErrors } = state.state.form; 
  return { data, pending, error, success, formErrors };
}

export default connect(mapStateToProps)(FormChargers);
