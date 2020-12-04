import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalContext } from './GlobalContext';
import Post from './Post';

const FeedListStyle = styled.div`
	display: grid;
	gap: 120px;
`;

export default function Feed() {
	const { state, dispatch } = useContext(GlobalContext);
	const { posts, loading } = state;
	return (
		<>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<FeedListStyle>
					{posts.map(post => (
						<Post key={post.postId} post={post} />
					))}
				</FeedListStyle>
			)}
		</>
	);
}
