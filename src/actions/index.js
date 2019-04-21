const FORM_LOADING = 'FORM_LOADING';
const FORM_SUCCESS = 'FORM_SUCCESS';
const FORM_ERROR = 'FORM_ERROR';
const SHOW_ERRORS = 'SHOW_ERRORS';
const SET_FIELD = 'SET_FIELD';
const SET_STEP = 'SET_STEP';
const UPDATE_CHARGERS_DATA = 'UPDATE_CHARGERS_DATA';


let formLoading = (val) => {
	return { type:FORM_LOADING, payload:val}
}

let formSuccess = (val) => {
	return {type:FORM_SUCCESS, payload:val}
}

let formError = (val) => {
	return {type:FORM_ERROR, payload:val}
} 

let setField = (val) => {
	return {type:SET_FIELD, payload:val}
}

let showErrors = (val) => {
	return {type:SHOW_ERRORS, payload:val}
}

let setStep = (val) => {
	return {type:SET_STEP, payload:val}
}

let updateChargersData = (val) => {
	return {type:UPDATE_CHARGERS_DATA, payload:val}
}

module.exports ={ setField, formError, showErrors, setStep, updateChargersData, formLoading}






