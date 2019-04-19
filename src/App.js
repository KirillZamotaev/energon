import React, { Component } from 'react';
import logo from './svg/logo.svg';
import {Provider, connect } from 'react-redux';
import store from './store/store';
import Main from './pages/main';

class App extends Component {
	
	
  render() {
    console.log(this.props);
	return (
		<div className="app">
			<Main />
		</div> 
    );
  }
}

const mapStateToProps = (state) => {
	return state;
}

App = connect(mapStateToProps)(App);


export default class Application extends Component{
	
	render() {
    return (
		<Provider store= {store}>
			<App />
		</Provider>
		);
  }
}