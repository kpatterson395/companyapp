import React from 'react';
import { connect } from 'react-redux';
import { addProject } from '../actions/projects';
import ProjectForm from './ProjectForm';
import { Link } from 'react-router-dom';

const Projects = (props) =>{

	const onSubmit = (project) => {
		props.addProject(project)
	}

	return (
		<div className="main-dashboard">
			<h3>Projects</h3>
			{/*list links to each project's data page*/}
			{props.projects.map((val) => <p key={val.id}><Link className="item-link" to={`/projects/${val.id}`} >{val.name}</Link></p>)}
			<div className="item-dashboard-new">
				<h3>Add a new project:</h3>
				{/*use project form to add a new project by passing the onSubmit function calling addProject*/}
				<ProjectForm onSubmit={onSubmit}/>
			</div>
		
		</div>
	)
	
}


const mapStateToProps = state => ({
	projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
		addProject: (project) => dispatch(addProject(project))
})



export default connect(mapStateToProps, mapDispatchToProps)(Projects)