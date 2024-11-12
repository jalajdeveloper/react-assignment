import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post, User, PostResponse } from '../types';

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<{ [key: number]: User }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResponse = await axios.get<PostResponse>('https://dummyjson.com/posts');
        
        const firstTenPosts = postResponse.data.posts.slice(0, 10);
        setPosts(firstTenPosts);

        const userIds = Array.from(new Set(firstTenPosts.map(post => post.userId)));
        const userPromises = userIds.map(id =>
          axios.get<User>(`https://dummyjson.com/users/${id}`)
        );
        const userResponses = await Promise.all(userPromises);
        
        const userData = userResponses.reduce((acc, response) => {
          const user = response.data;
          acc[user.id] = user;
          return acc;
        }, {} as { [key: number]: User });
        
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);

  return { posts, users };
};

export default useFetchPosts;
