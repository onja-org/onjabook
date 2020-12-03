import React, { createContext, useReducer, useEffect } from 'react';
import postsData from '../postsData.json';
import usersData from '../usersData.json';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'LOAD_JSON_DATA': {
					return {
						...state,
						loading: false,
						posts: postsData,
						users: usersData,
					};
				}
				default: {
					console.error('No actions defined for', action.type);
					break;
				}
			}
			return state;
		},
		{
			loading: true,
			posts: [],
			users: [],
			currentUser: '',
		}
	);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'LOAD_JSON_DATA' });
		}, 1000);
	}, []);

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalContextProvider };
