const filterReducer = (state='SHOW_ALL',action) => {
	switch (action.type){
		case 'SHOW_ALL':
		  return state = 'SHOW_ALL';
		case 'SHOW_ACTIVE':
		  return state = 'SHOW_ACTIVE';
		case 'SHOW_COMPLETED':
		  return state = 'SHOW_COMPLETED';
		default:
		  return state;
	}
}

export default filterReducer;