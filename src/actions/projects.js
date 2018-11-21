//ADD
export const addProject = (project) => ({
	type: 'ADD_PROJECT',
	project
})

//EDIT
export const editProject = (project) => ({
	type: 'EDIT_PROJECT',
	project
})

//DELETE
export const deleteProject = (id) => ({
	type: 'DELETE_PROJECT',
	id
})

//REMOVE DELETED EMPLOYEE
export const removeEmployee = (employeeId) => ({
	type: 'REMOVE_EMPLOYEE',
	employeeId
})

//REMOVE DELETED ACCOUNT
export const removeAccount = (accountId) => ({
	type: 'REMOVE_ACCOUNT',
	accountId
})