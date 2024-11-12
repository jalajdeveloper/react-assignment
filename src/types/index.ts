export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }
  
  export interface User {
    id: number;
    firstName: string;
    lastName: string;
  }
  
  export interface PostResponse {
    posts: Post[];
  }
  