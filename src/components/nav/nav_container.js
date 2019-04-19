import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import './nav.less';
const classes = new BemHelper({name: 'nav'});

export default class Nav_container extends Component{
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
		<nav {...classes('')}>
			Шапка
		</nav>
		)
	}
	
}