import React from 'react';
import { Post, User } from '../../types';
import * as Styled from './PostCard.styles';

interface PostCardProps {
  post: Post;
  user: User | undefined;
}

const PostCard: React.FC<PostCardProps> = ({ post, user }) => (
  <Styled.Card>
    <Styled.Title>{post.title}</Styled.Title>
    <Styled.Body>{post.body}</Styled.Body>
    {user && (
      <Styled.UserName>
        {user.firstName} {user.lastName}
      </Styled.UserName>
    )}
  </Styled.Card>
);

export default PostCard;
