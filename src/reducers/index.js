const rootReducer = (state, {type, payload})=>{
	if(type === 'FORM_SEND'){
	  let newState = Object.asign({}, state, { form_pending: true });
	  return newState;
	} else if(type === 'FORM_SEND'){
	  let newState = Object.asign({}, state, { form_pending: true });
	  return newState;
	}
	
	return state
}

export default rootReducer;