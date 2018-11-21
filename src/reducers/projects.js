const projects = (state = [], action) => {
	switch(action.type) {
		case 'ADD_PROJECT':
		return (
				[ ...state,
				  action.project
				]
			)
		case 'EDIT_PROJECT':
			return (
					[ ...state.filter((val) => val.id !== action.project.id),
					  action.project
					]
				)
		case 'DELETE_PROJECT':
			return (
					[ ...state.filter((val) => val.id !== action.id)
					]
				)
		case 'REMOVE_EMPLOYEE':

			return (
					[ ...state.map((val) => { if(val.employees.indexOf(action.employeeId) !== -1){
													let tempArr = [...val.employees]
													let i = val.employees.indexOf(action.employeeId)
													console.log(state)
													return ({
															...val,
															employees: tempArr.slice(0,i).concat(tempArr.slice(i+1))
															})
													} else {
														return ({...val})
													}
										})
					]
				)
		case 'REMOVE_ACCOUNT':

			return (
					[ ...state.map((val) => { if(val.account === action.accountId){
													return ({...val,
																account: null})} 
													else {
														return ({...val})
													}
									})
					]
				)
		default: 
			return state	
	}
};

export default projects

