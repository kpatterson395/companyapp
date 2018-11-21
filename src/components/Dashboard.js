import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
	return (
		<div className="dashboard">
			<p><Link className="dashboard-links" to={'/employees'}>Employees</Link></p>
			<p><Link className="dashboard-links" to={'/accounts'}>Accounts</Link></p>
			<p><Link className="dashboard-links" to={'/projects'}>Projects</Link></p>
		</div>
	)
}

export default Dashboard;