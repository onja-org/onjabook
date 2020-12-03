import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
	ul  {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}
`;

export default function Menu() {
	return (
		<div>
			<h1>Onjabook</h1>
			<NavStyles>
				<ul>
					<li>
						<Link to="/">Feed</Link>
					</li>
					<li>
						<Link to="/add">Add a post</Link>
					</li>
					<li>
						<Link to="/options">Options</Link>
					</li>
				</ul>
			</NavStyles>
		</div>
	);
}
