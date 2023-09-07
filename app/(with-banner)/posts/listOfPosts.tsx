import React from "react";
import LikeButton from "./likeButton";
import Link from "next/link";
import { Post } from "./@types/posts";

const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Error fetching lists posts");
  }
  return response.json();
};

const ListOfPosts = async () => {
  const posts = await fetchPosts();

  return posts.map((post: Post) => (
    <article key={post.id} style={{ margin: "20px 0" }}>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
};

export default ListOfPosts;
