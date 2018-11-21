//ADD
export const addAccount = (account) => ({
	type: 'ADD_ACCOUNT',
	account
})

//EDIT
export const editAccount = (account) => ({
	type: 'EDIT_ACCOUNT',
	account
})

//DELETE
export const deleteAccount = (id) => ({
	type: 'DELETE_ACCOUNT',
	id
})
