import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import history from '../history';
import { withRouter } from 'react-router';

class AccountForm extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			name: ""
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = (e) => {
		{/*track changes in form through the component state*/}
		const name = e.target.value;
		this.setState(()=>( {name} ));
	}

	componentWillMount = () => {
	{/*	when component mounts, set state with account data- this only occurs if an account to edit is passed through props*/}
		if(this.props.accountID){
			let editAccount = this.props.accounts.filter((val) => val.id === this.props.accountID)[0]
			this.setState({
				name: editAccount.name
			})
		}
	}


	onSubmit = (e) => {
		e.preventDefault();
		{/*user must enter account name*/}
		if(e.target.elements[0].value === ""){
			alert("You must include an account name")
		} else {
			{/*perform the onsubmit function passed from parent component*/}
			this.props.onSubmit({
				name: e.target.elements[0].value,
				id: this.props.accountID || uniqid()
			})
			{/*reset state*/}
			this.setState({
				name: ""
			})
			this.props.history.push('/accounts')
		}
		
	}
	render(){
		return (
			<form className="edit-item" onSubmit={this.onSubmit}>
				{/*if the form has been passed a prop to edit, set the value*/}
				<input type="text" value={this.state.name || ""} onChange={this.handleChange} name="accountName" placeholder="Account Name" />
				<input type="submit" />
			</form>
		)		
	}


}


const mapStateToProps = state => ({
	accounts: state.accounts
})



export default withRouter(connect(mapStateToProps)(AccountForm))