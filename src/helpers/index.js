const renderProps = require('../store/renderProps');
const API_URL = renderProps.state.settings.apiUrl;

const formValidate = (formData) => {
	return new Promise((resolve, reject)=>{
	
		let formErrors = {};
		Object.keys(formData).map((key,idx)=>{
			switch (key) {
				case 'number':
					if(formData[key].length >= 10) formErrors[key] = 'wrong format!';
			}
		});

		resolve(formErrors);
	})
}

const addStation = (data) => {
	return fetch(`${API_URL}/locations/${data.locationId}/stations`, {method:'POST', body: data })
		.then(res=> res.json())
		.catch(err=> console.log('ERROR'))
}

const getStation = (data) => {
	return fetch(`${API_URL}/locations/${data.number}/stations`)
		.then(res=> res.json())
		.catch(err=>console.log('ERROR')) 
}

const sendForm = (data, step) => {
	switch (step){
		case 1:
			return getStation(data);
		case 2: 
			return addStation(data);				
	}
}



const getAllStations = (data) => {
	return fetch(`${API_URL}/stations`)
		.then(res=> res.json())
		.catch(err=>console.log('ERROR')) 
}

module.exports = {
	sendForm,
	addStation,
	getStation,
	getAllStations,
	formValidate
}
