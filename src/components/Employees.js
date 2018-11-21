import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import { addEmployee } from '../actions/employees';


const Employees = (props) => {


	const onSubmit = (employee) => {
		props.addEmployee(employee)
	}


	let employeeTotal = props.employees.length;
	return (
		<div className="main-dashboard">

			{/*display count of employees*/}

			<h3>Number of Employees: {employeeTotal}</h3>

			{/*list links to each employee's data page*/}
			
			{props.employees.map((val) => <p key={val.id}><Link className="item-link" to={`/employees/${val.id}`} >{val.firstName} {val.lastName}</Link></p>)}
			<div className="item-dashboard-new">
				
				{/*use employee form to add a new employee by passing the onSubmit function calling addEmployee*/}
				
				<h3>Add a new employee:</h3>
				<EmployeeForm onSubmit={onSubmit}/>
			</div>
		</div>
	)			
		

	
}


const mapStateToProps = state => ({
	employees: state.employees
})


const mapDispatchToProps = (dispatch) => ({
		addEmployee: (employee) => dispatch(addEmployee(employee))
})




export default connect(mapStateToProps, mapDispatchToProps)(Employees)