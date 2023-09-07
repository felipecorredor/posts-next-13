import React from "react";
import { Post } from "../@types/posts";
import Link from "next/link";

interface PostProps {
  params: {
    id: number;
  };
  children: React.ReactNode;
}

const fetchSinglePost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching single post");
  }
  return response.json();
};

const Post: React.FC<PostProps> = async ({ children, params }) => {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Show comments</Link>
      {children}
    </div>
  );
};

export default Post;
