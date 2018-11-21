const employees = (state = [], action) => {
	switch(action.type) {
		case 'ADD_EMPLOYEE':
		return (
				[ ...state,
				  action.employee
				]
			)
		case 'EDIT_EMPLOYEE':
		return (
				[ ...state.filter((val) => val.id !== action.employee.id),
				  action.employee
				]
			)
		case 'DELETE_EMPLOYEE':
		return (
				[ ...state.filter((val) => val.id !== action.id),
				]
			)
		default :
			return state
	}
};

export default employees