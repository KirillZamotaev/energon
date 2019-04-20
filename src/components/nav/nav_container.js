import React, { Component } from 'react';
import BemHelper from 'react-bem-helper';
import logo from '../../svg/logo.svg';
import './nav.sass';

const classes = new BemHelper({name: 'nav'});

export default class Nav_container extends Component{
	constructor(props){
		super(props);
		
	}
	
	render(){
		return (
		<>
		<nav {...classes('')}>
			<button {...classes('burger-menu')}>
				<span { ...classes('burger-menu','line') } />
			</button>
			<a href="/" {...classes('logo-link')}>
				<img src={logo} alt="logo" {...classes('logo')} />
			</a>
		</nav>
		<aside {...classes('aside-slide')}>
			<ul {...classes('links')} >
				<li {...classes('link-item')} >
					<a href="#" {...classes('link-item')} >Custom Link</a>				
				</li>			
			</ul>			 		
		</aside>		 
		</>
		)
	}
	
}
