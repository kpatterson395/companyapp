import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';




const initialState = { 
	employees: [{
		firstName: 'Kristie',
		lastName: 'Patterson',
		id: 'joppmk2u',
		projects: ['joppn1t8', 'joppn41p']
		},
		{firstName: 'Jane',
		lastName: 'Doe',
		id: 'joppmtm8',
		projects: ['joppn1t8', 'joppn41p']
		}],
	accounts: [{
		name: 'Account1',
		id: 'joppmyk6',
		projects: ['joppmyk6', 'joppmyk6']
	}],
	projects: [{
		name: 'Project1',
		id: 'joppn1t8',
		account: 'joppmyk6',
		employees: ['joppmk2u', 'joppmtm8']
	}, {
		name: 'Project2',
		id: 'joppn41p',
		account: 'joppmyk6',
		employees: ['joppmk2u', 'joppmtm8']
	} ] 
};

	const store = createStore(rootReducer, initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);


export default store;