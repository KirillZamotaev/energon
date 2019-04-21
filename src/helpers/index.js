const renderProps = require('../store/renderProps');
const API_URL = renderProps.state.settings.apiUrl;
const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0ZjAyOWJiLTQ5YmMtNGNkMS1hZjUwLTFmYTIwNDQ5MWQzMiIsImVtYWlsIjoiZ3V3ZWpqZUBsdXZpZGEuYmQiLCJwaG9uZSI6IjAyNjk3NzM5MDkiLCJpYXQiOjE1NTU2MjAyNzMsImV4cCI6MTU2MDgwNDI3M30.TIODcqz1UBj0d7vKzZ4GyDMkZD3YyG9kDNugIdD8bao
Location id: d1c38c43-79e0-47e0-a77c-4d87f23cc205`;
const formValidate = (formData) => {
	return new Promise((resolve, reject)=>{
	
		let formErrors = {};
		Object.keys(formData).map((key,idx)=>{
			switch (key) {
				case 'number':
					if(formData[key].length && formData[key].length < 10) formErrors[key] = 'wrong format!';
			}
		});

		resolve(formErrors);
	})
}

const addStation = (data) => {
	return fetch(`${API_URL}/locations/${data.locationId}/stations`, {
		method:'POST', 
		body: data, 
		headers:{ Authorisation: `Bearer ${token}`}
		})
		.then(res=> res.json())
		.catch(err=> console.log('ERROR', err))
}

const getStation = (data) => {
	return fetch(`${API_URL}/locations/${data.number}/stations`, { headers:{ Authorisation: `Bearer ${token}`}})
		.then(res=> res.json())
		.catch(err=>console.log('ERROR', err)) 
}

const sendForm = (data, step) => {
	switch (step){
		case 1:
			return getStation(data);
		case 2: 
			return addStation(data);
		default:
			return getStation(data);				
	}
}



const getAllStations = (data) => {
	return fetch(`${API_URL}/stations`, { headers:{ Authorisation: `Bearer ${token}`}})
		.then(res=> res.json())
		.catch(err=>console.log('ERROR', err)) 
}

module.exports = {
	sendForm,
	addStation,
	getStation,
	getAllStations,
	formValidate
}
