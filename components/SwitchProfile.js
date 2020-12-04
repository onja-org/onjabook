import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

// map though them to create the options
// how can we already select the profile that is current?

export default function SwitchProfile() {
	const { state, dispatch } = useContext(GlobalContext);
	const { users, currentUser } = state;
	const usersOptions = users.map(user => (
		<option key={user.userId} value={user.userId}>
			{user.userName}
		</option>
	));
	function switchAccount(e) {
		e.preventDefault();
		const newUserId = e.target.userSelect.value;
		console.log(newUserId);
		dispatch({ type: 'SWITCH_USER_ACCOUNT', newUserId });
	}
	return (
		<div>
			<form onSubmit={switchAccount}>
				<select name="userSelect" defaultValue={currentUser}>
					{usersOptions}
				</select>
				<button>Save</button>
			</form>
		</div>
	);
}
