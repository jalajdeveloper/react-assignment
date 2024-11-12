import React from 'react';
import styled from 'styled-components';
import useFetchPosts from './hooks/useFetchPosts';
import PostCard from './components/PostCard/PostCard';

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px;
`;

const App: React.FC = () => {
  const { posts, users } = useFetchPosts();

  return (
    <PostContainer>
      {posts.map(post => (
        <PostCard key={post.id} post={post} user={users[post.userId]} />
      ))}
    </PostContainer>
  );
};

export default App;
