const accounts = (state = [], action) => {
	switch(action.type) {
		case 'ADD_ACCOUNT':
		return (
				[ ...state,
				  action.account
				]
			)
		case 'EDIT_ACCOUNT':
		return (
				[ ...state.filter((val) => val.id !== action.account.id),
				  action.account
				]
			)
		case 'DELETE_ACCOUNT':
		return (
				[ ...state.filter((val) => val.id !== action.id),
				]
			)
		default :
			return state
	}
};

export default accounts

