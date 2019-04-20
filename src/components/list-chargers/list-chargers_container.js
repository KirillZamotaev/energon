import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import ListChargersUI from './list-chargers_ui';
import { connect } from 'react-redux'; 
class ListChargersContainer extends Component{

	render() {
		let { data, settings } = this.props;
		let opt = {data, settings};	
			return (<ListChargersUI {...opt}/>);
	}
	
}


const mapStateToProps = (state)=>{
	return {
	   data: state.chargersData,
	   settings: state.settings
	}
}

export default connect(mapStateToProps)(ListChargersContainer);
