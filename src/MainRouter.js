import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Employees from './components/Employees';
import Accounts from './components/Accounts';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import EmployeeData from './components/EmployeeData';
import AccountData from './components/AccountData';
import ProjectData from './components/ProjectData';

class MainRouter extends React.Component{


	render(){
		return (
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route exact path='/employees' component={Employees} />
				<Route exact path='/accounts' component={Accounts} />
				<Route exact path='/projects' component={Projects} />
				<Route exact path='/employees/:id' component={EmployeeData} />
				<Route exact path='/accounts/:id' component={AccountData} />
				<Route exact path='/projects/:id' component={ProjectData} />
			</Switch>
		)
	}
}


export default withRouter(MainRouter);
