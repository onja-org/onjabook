import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';

const PostLikesStyles = styled.div`
	display: flex;
	gap: 10px;
`;

export default function Likes({ post }) {
	const { state, dispatch } = useContext(GlobalContext);
	const { currentUser } = state;

	function checkIfLikedOrNot() {
		// check if we already like the post
	}

	function likePost() {
		const newLike = {
			likeId: Date.now(),
			userId: currentUser,
		};
		dispatch({ type: 'LIKE_POST', newLike, postId: post.postId });
	}

	function unlikePost() {
		// unlike a post!
	}

	return (
		<PostLikesStyles>
			<button onClick={likePost}>Like</button>
			<span>{post.likes.length}</span>
		</PostLikesStyles>
	);
}
