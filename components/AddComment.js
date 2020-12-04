import React from 'react';
import styled from 'styled-components';

const AddCommentFormStyles = styled.form`
	display: flex;
	grid-gap: 10px;
	justify-content: space-between;
	background: #c4c4c4;
	padding: 0.6rem;
	border-radius: 10px;
	input {
		background: none;
		border: none;
		width: 100%;
	}
`;

export default function AddComment({ post }) {
	return (
		<AddCommentFormStyles>
			<input type="text" placeholder="Type your comment here" />
			<button>Post</button>
		</AddCommentFormStyles>
	);
}
