import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { deleteProject, editProject } from '../actions/projects';
import { Link } from 'react-router-dom';
import history from '../history';


class ProjectData extends React.Component{
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

	onSubmit = (project) => {
		this.props.editProject(project)
		
	}

	handleDelete = () => {
		{/*delete project*/}
		this.props.deleteProject(this.props.match.params.id)
		this.props.history.push('/projects');	
	}



	render(){
		let projectID = this.props.match.params.id
		let projectValue = this.props.projects.filter((val) => val.id === projectID)[0]
		let accountValue = this.props.accounts.filter((val) => val.id === projectValue.account)[0] || ""
		let employeesValue = this.props.employees.filter((val) => projectValue.employees.indexOf(val.id) !== -1)
		return (
			<div className="item-data">
				<h3>{projectValue.name}</h3>
				{/*show project form if the user would like to edit, otherwise show project data*/}
				{this.state.edit ? 
					<ProjectForm onSubmit={this.onSubmit} projectID={projectID} /> :
					<div className="item-data-projects">
						{/*link to account the project is under*/}
						<h4>Account:</h4> <Link className="item-projects-links" to={`/accounts/${accountValue.id}`}>{accountValue.name}</Link>
						{/*link to employees on the project*/}
						<h4>Employees:</h4> {employeesValue.map((val) =><p key={val.id} > <Link className="item-projects-links" to={`/employees/${val.id}`} >{val.lastName}, {val.firstName} </Link></p> )}
						<button onClick={this.handleEdit} className="edit-button">Edit Project</button>
					</div>
				}
				{/*delete project*/}
				<button className="delete-button" onClick={this.handleDelete}>Delete Project</button>
				
			</div>
		)
	}
}


const mapStateToProps = state => ({
	projects: state.projects,
	employees: state.employees,
	accounts: state.accounts
})

const mapDispatchToProps = (dispatch) => ({
		deleteProject: (projectId) => dispatch(deleteProject(projectId)),
		editProject: (project) => dispatch(editProject(project))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProjectData)