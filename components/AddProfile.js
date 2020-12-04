import React, { useState, useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import { FormStyle } from './Styles';

export default function AddProfile() {
	const [username, setUsername] = useState('');
	const [profilePicture, setProfilePicture] = useState('https://picsum.photos/100');
	const [birthday, setBirthday] = useState('');
	const { dispatch } = useContext(GlobalContext);

	function createNewUser(e) {
		e.preventDefault();
		const newUser = {
			userId: Date.now().toString(),
			userName: username,
			profilePictureUrl: profilePicture,
			birthDate: birthday,
		};
		dispatch({ type: 'ADD_NEW_USER', newUser });
		alert('NEW USER ADDED!');
		// dispatch new action, with the object attached to it
	}

	return (
		<FormStyle onSubmit={createNewUser}>
			<label>Username : </label>
			<input
				type="text"
				value={username}
				onChange={e => setUsername(e.target.value)}
				placeholder="Enter the username of the new user"
				required
			/>
			<label>Profile Pic : </label>
			<input
				type="text"
				value={profilePicture}
				onChange={e => setProfilePicture(e.target.value)}
				placeholder="Paste an URL pic of the new user"
				required
			/>
			<label>Birthday : </label>
			<input
				type="date"
				value={birthday}
				onChange={e => setBirthday(e.target.value)}
				required
			/>
			<button>Create new user</button>
		</FormStyle>
	);
}
