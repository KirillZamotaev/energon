import React, { Component, Fragment } from 'react';
import Form from '../components/form/form_container';
import Nav from '../components/nav/nav_container';
import BemHelper from 'react-bem-helper';
console.log(typeof Nav);
const classes = new BemHelper({name: 'main-page'});

export default class Main extends Component{
	constructor(props){
		super(props);
		 
	}
	 
	render(){
		return (
			<Fragment>
			<Nav />
			<div {...classes()} >
				Главная страница
			</div>
			</Fragment>
		);
		
	}
	
}