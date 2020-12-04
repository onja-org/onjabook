import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProfileOptions from './ProfileOptions';
import SwitchProfile from './SwitchProfile';
import AddProfile from './AddProfile';

// menu + 3 other components
// switch will live here

// profile options
// switch profile
// add profile

export default function Options() {
	return (
		<div>
			<Link to="/options">Account Options</Link>
			<Link to="/options/switch">Switch Profile</Link>
			<Link to="/options/add">Add Profile</Link>
			<Switch>
				<Route path="/options" exact>
					<ProfileOptions />
				</Route>
				<Route path="/options/switch">
					<SwitchProfile />
				</Route>
				<Route path="/options/add">
					<AddProfile />
				</Route>
			</Switch>
		</div>
	);
}
