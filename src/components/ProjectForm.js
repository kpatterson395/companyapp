import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { withRouter } from 'react-router';
import history from '../history'


class ProjectForm extends React.Component{
	constructor(props){
		super(props)
		this.onSubmit = this.onSubmit.bind(this)
		this.state = {
			name: "",
			account: 0,
			employees: []
		}
		this.handleAccountChange = this.handleAccountChange.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	handleAccountChange = (e) => {
		{/*track changes in form through the component's state*/}
		const account = e.target.value;
		this.setState(()=>( {account} ));
	}

	handleNameChange = (e) => {
		{/*track changes in form through the component's state*/}
		const name = e.target.value;
		this.setState(()=>({name}))
	}

	handleEmployeeChange = (e) => {
		console.log(e.target.value)
		if(this.state.employees.indexOf(e.target.value)===-1){
			this.setState({
				employees: [...this.state.employees, e.target.value]
			})
		}else{
			let arr = this.state.employees
			this.setState({
				employees: arr.slice(0, arr.indexOf(e.target.value)).concat(arr.slice(arr.indexOf(e.target.value)+1))
			})
		}
	}

	componentWillMount = () => {
	{/*when the component mounts set the state with project data- this only occurs if projectID to edit is passed through props*/}
		if(this.props.projectID){
			let editProject = this.props.projects.filter((val) => val.id === this.props.projectID)[0]
			this.setState({
				name: editProject.name,
				account: editProject.account,
				employees: editProject.employees			
			})
		}
	}


	onSubmit = (e) => {
		e.preventDefault();
		let employeesList = []
		{/*create array of all employees selected*/}
		for(var i =0; i < e.target.elements[2].length; i++ ){
			if(e.target.elements[2][i].selected){
				employeesList.push(e.target.elements[2][i].value)
			}

		}
		{/*user must enter project name and account, currently a project can be created with no employees*/}
		if(e.target.elements[0].value === "" || e.target.elements[1].value === ""){
			alert("You must include a project name and account")
		} else {
			{/*perform the onSubmit function passed from the parent component*/}
			this.props.onSubmit({
				name: e.target.elements[0].value,
				id: this.props.projectID ||uniqid(),
				account: e.target.elements[1].value,
				employees: employeesList			
			})
			this.setState({
				name: ""
			})
			this.props.history.push('/projects')	
		}
	}


	render(){
			return (
			<form className="edit-item" onSubmit={this.onSubmit}>
				{/*if the form has been passed a prop to edit, set the value*/}
				<input type="text" onChange={this.handleNameChange} name="projectName" value={this.state.name || ""} placeholder="Project Name" />
				<select name="account" onChange={this.handleAccountChange}>
					{this.props.accounts.map((val) => <option key={val.id} value={val.id}> {val.name} </option>)}
				</select>
				<select multiple={true} value={this.state.employees} onChange={this.handleEmployeeChange} id="employees">
					{this.props.employees.map((val) => <option key={val.id} value={val.id}> {val.firstName} {val.lastName}</option>)}
				</select>
				<input type="submit" />
			</form>
		)		
	}


}


const mapStateToProps = (state) => ({
	accounts: state.accounts,
	projects: state.projects,
	employees: state.employees
})




export default withRouter(connect(mapStateToProps)(ProjectForm))