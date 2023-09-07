export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
