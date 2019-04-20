module.exports = {
	state:{
		chargersData:null,
		form: {
			steps: 2,
			initialStep: 1,
			data:null,
			formErrors: {},
			pending: false,
			success: false,
			error: false
		},
		settings:{
		   apiUrl:'https://api.tau.green/v1',		
		}
	}
}
