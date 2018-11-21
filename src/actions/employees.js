//ADD
export const addEmployee = (employee) => ({
	type: 'ADD_EMPLOYEE',
	employee
})

//EDIT
export const editEmployee = (employee) => ({
	type: 'EDIT_EMPLOYEE',
	employee
})

//DELETE
export const deleteEmployee = (id) => ({
	type: 'DELETE_EMPLOYEE',
	id
})
