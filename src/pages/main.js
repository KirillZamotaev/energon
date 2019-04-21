import React, { Component, Fragment } from 'react';
import FormChargers from '../components/form-chargers/form-chargers';
import ListChagers from '../components/list-chargers/list-chargers_container';
import Nav from '../components/nav/nav_container';
import './main.sass';
import BemHelper from 'react-bem-helper';
const classes = new BemHelper({name: 'main-page'});

export default class Main extends Component{
	constructor(props){
		super(props);
		 
	}
	 
	render(){
		return (
			<Fragment>
				<Nav />
				<div {...classes('')} >
				     <div {...classes('container')} >	
					 <div {...classes('row')}>
						<div {...classes('col-6')} >
						 	<FormChargers />
					 	</div>
						<div {...classes('col-6 bg-gray')} >
							<ListChagers />
						</div>
					 </div>
				      </div>
				 </div>
			</Fragment>
		);
		
	}
	
}
