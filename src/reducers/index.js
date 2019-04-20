const rootReducer = (state, {type, payload})=>{
	if (type === 'FORM_LOADING'){
	  let newState = Object.assign({}, state);
  	  newState.state.form.loading = payload;
	  return newState;
	} else if (type === 'FORM_SUCCESS'){
	  let newState = Object.assign({}, state);
	  newState.state.form.success = payload;
	  return newState;
	} else if (type === 'FORM_ERROR'){
	  let newState = Object.assign({}, state);
	  newState.state.form.error = payload;
	  return newState;
	} else if (type === 'SET_FIELD'){
	  let newState = Object.assign({}, state);
	  let { data } = newState.state.form;
	  data = data || [];	  
	  [payload.fieldName] = payload.value;
          newState.state.form.data = data;
	  return newState;
	} else if (type === 'UPDATE_CHARGER_DATA'){
	  let newState = Object.asign({}, state);
	  newState.state.chargerData = payload;
	  return newState;
	} 
	
	return state
}

export default rootReducer;
