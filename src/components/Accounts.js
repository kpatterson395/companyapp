import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import { addAccount } from '../actions/accounts'


const Accounts = (props) => {
		 
	const onSubmit = (account) => {
	 	props.addAccount(account)
	}


	return (
		<div className="main-dashboard">
			<h3>Accounts</h3>
			{/*list links to each account's data page*/}
			{props.accounts.map((val) => <p key={val.id}><Link className="item-link" to={`/accounts/${val.id}`} >{val.name}</Link></p>)}
			<div className="item-dashboard-new">
				<h3>Add a new account:</h3>
				{/*use account form to add a new account by passing the onSubmit function calling addAccount*/}
				<AccountForm onSubmit={onSubmit}/>
			</div>
		</div>
	)
}



const mapStateToProps = state => ({
	accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
		addAccount: (account) => dispatch(addAccount(account))
})

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)