import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountForm from './AccountForm';
import {deleteAccount, editAccount} from '../actions/accounts';
import history from '../history';
import { removeAccount } from '../actions/projects';

class AccountData extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			edit: false
		}
		this.handleEdit = this.handleEdit.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleEdit = () => {
		this.setState({
			edit: true
		})
	}

	onSubmit = (account) => {
		this.props.editAccount(account)
	}

	handleDelete = () => {
	{/*delete account and remove from projects*/}
		this.props.removeAccount(this.props.match.params.id)
		this.props.deleteAccount(this.props.match.params.id)
		this.props.history.push('/accounts');	
	}

	render(){
		let accountID = this.props.match.params.id
		let accountValue = this.props.accounts.filter((val) => val.id === accountID)[0];
		let projectList = this.props.projects.filter((val) => val.account === accountID)
		return (
			<div className="item-data">
				{/* show account form if the user would selects edit, otherwise show account data */}
				{this.state.edit ? <AccountForm onSubmit={this.onSubmit} accountID={accountID} /> : <h3>{accountValue.name}<button className="edit-button" onClick={this.handleEdit}>Edit</button></h3> }
				<div className="item-data-projects">
					<h3>Projects</h3>
					{/* list links to projects under the account*/}
					{projectList.map((val) => <p key={val.id}> <Link className="item-projects-links" to={`/projects/${val.id}`} > {val.name} </Link> </p> )}
				</div>
				{/* delete account*/}
				<button className="delete-button" onClick={this.handleDelete}> Delete Account </button>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	projects: state.projects,
	accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({	
		deleteAccount: (accountId) => dispatch(deleteAccount(accountId)),
		editAccount: (account) => dispatch(editAccount(account)),
		removeAccount: (accountId) => dispatch(removeAccount(accountId))
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountData)