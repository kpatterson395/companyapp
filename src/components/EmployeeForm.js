import React from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../actions/employees';
import uniqid from 'uniqid';
import { withRouter } from 'react-router';
import history from '../history';

class EmployeeForm extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			firstName: "",
			lastName: ""
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.handleFirstChange = this.handleFirstChange.bind(this)
		this.handleLastChange = this.handleLastChange.bind(this)
	}



	handleFirstChange = (e) => {
	{/*track changes in form through the component's state*/}
		const firstName = e.target.value;
		this.setState(()=>( {firstName} ));
	}

	handleLastChange = (e) => {
		{/*track changes in form through the component's state*/}
		const lastName = e.target.value;
		this.setState(()=>( {lastName} ));
	}

	componentWillMount = () => {
	{/*when the component is mounted the state is set with employee data- this only occurs if employeeID to edit is passed in props*/}
		if(this.props.employeeID){
			let editEmployee = this.props.employees.filter((val) => val.id === this.props.employeeID)[0]
			this.setState({
				lastName: editEmployee.lastName,
				firstName: editEmployee.firstName
			})
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		
		{/*user must enter employee name*/}
		if(e.target.elements[0].value === "" || e.target.elements[1].value === ""){
			alert("You must include a first and last name")
		} else {
			
		{/*perform the onSubmit function passed from the parent component*/}
			this.props.onSubmit({firstName: e.target.elements[0].value,
				lastName: e.target.elements[1].value,
				id: this.props.employeeID || uniqid()
			})
			{/*reset state*/}
			this.setState({
				firstName: "",
				lastName: ""
			})	
			this.props.history.push('/employees')
		}
		
		
	}

	render(){
		return (
			<form className="edit-item" onSubmit={this.onSubmit}>
			{/*if the form has been passed a prop to edit, set the value*/}
				<input type="text" value={this.state.firstName || ""} onChange={this.handleFirstChange} name="firstName" placeholder="First Name" />
				<input type="text" value={this.state.lastName || ""} onChange={this.handleLastChange} name="lastName" placeholder="Last Name" />
				<input type="submit"/>
			</form>
		)		
	}


}


const mapStateToProps = state => ({
	employees: state.employees
})


const mapDispatchToProps = (dispatch) => ({
		addEmployee: (employee) => dispatch(addEmployee(employee))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeForm))


