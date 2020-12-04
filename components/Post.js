import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';
import Likes from './Likes';
import AddComment from './AddComment';

const PostStyles = styled.div`
	display: grid;
	grid-template-columns: 500px;
	gap: 10px;
	.main-picture {
		width: 100%;
	}
`;

const ContentHeaderStyles = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: auto 1fr 1fr;
	align-items: center;
	.post-date {
		text-align: right;
	}
	img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
	}
`;

const PostCommentContainerStyles = styled.div`
	display: grid;
	gap: 10px;
`;

export default function Post({ post }) {
	const { state, dispatch } = useContext(GlobalContext);
	const { currentUser, users } = state;
	const currentUserObj = users.find(user => user.userId === currentUser);
	return (
		<PostStyles>
			<ContentHeaderStyles>
				<img
					src={currentUserObj.profilePictureUrl}
					alt={`profile pic of ${currentUserObj.userName}`}
				/>
				<span>{currentUserObj.userName}</span>
				<span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
			</ContentHeaderStyles>
			<p>{post.postTextContent}</p>
			<img
				className="main-picture"
				src={post.imgUrl}
				alt={`Post picture - ${post.postTextContent}`}
			/>
			<Likes post={post} />
			<PostCommentContainerStyles>
				<div>
					{post.comments.map(comment => {
						const commentUserObj = users.find(user => user.userId === comment.userId);
						return (
							<div key={comment.commentId}>
								<ContentHeaderStyles>
									<img
										src={commentUserObj.profilePictureUrl}
										alt={`profile pic of ${commentUserObj.userName}`}
									/>
									<span>{commentUserObj.userName}</span>
									<span className="post-date">
										{new Date(comment.date).toLocaleDateString()}
									</span>
								</ContentHeaderStyles>
								<p>{comment.commentTextContent}</p>
							</div>
						);
					})}
				</div>
				<AddComment post={post} />
			</PostCommentContainerStyles>
		</PostStyles>
	);
}
