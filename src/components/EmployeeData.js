import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEmployee, editEmployee } from '../actions/employees';
import {removeEmployee } from '../actions/projects';
import EmployeeForm from './EmployeeForm';
import history from '../history';


class EmployeeData extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			edit: false
		}
		this.handleEdit = this.handleEdit.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	handleEdit = () => {
		this.setState({
			edit: true
		})
	}

	onSubmit = (employee) => {
		this.props.editEmployee(employee)
	}

	handleDelete = () => {
	{/*delete employee and remove from projects*/}
		this.props.removeEmployee(this.props.match.params.id)
		this.props.deleteEmployee(this.props.match.params.id)
		this.props.history.push('/employees');	
	}
		
	
	render(){
		let employeeID = this.props.match.params.id
		let employeeValue = this.props.employees.filter((val) => val.id === employeeID)
		let projectsList = this.props.projects.filter((val) => val.employees.indexOf(employeeID) !== -1)
		return (
			<div className="item-data">
				<h3>Employee</h3>
				{/*show employee form if the user would like to edit, otherwise show employee data*/}
				{this.state.edit ? <EmployeeForm onSubmit={this.onSubmit} employeeID={employeeID}/> : <p> {employeeValue[0].lastName}, {employeeValue[0].firstName} <button className="edit-button" onClick={this.handleEdit}>Edit</button></p>}  
				<div className="item-data-projects">
					<h3>Projects</h3>
					{/*list links to projects the employee is included on*/}
					{projectsList.map((val) => <p key={val.id}><Link className="item-projects-links" to={`/projects/${val.id}`}>{val.name}</Link></p>)}
				</div>
				{/*delete employee*/}
				<button className="delete-button" onClick={this.handleDelete}> Delete Employee</button>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	employees: state.employees,
	projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
	
		editEmployee: (employee) => dispatch(editEmployee(employee)),
		deleteEmployee: (employeeId) => dispatch(deleteEmployee(employeeId)),
		removeEmployee: (employeeId) => dispatch(removeEmployee(employeeId))

})


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeData)