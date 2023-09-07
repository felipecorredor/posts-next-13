import React from "react";
import { CommentPost } from "../../@types/posts";
import Image from "next/image";

interface CommentsPageProps {
  params: {
    id: number;
  };
}

const fetchCommentPost = async (id: number): Promise<CommentPost[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!response.ok) {
    throw new Error("Error fetching comments");
  }
  return response.json();
};

const CommentsPage: React.FC<CommentsPageProps> = async ({ params }) => {
  const { id } = params;
  const comments = await fetchCommentPost(id);

  return (
    <ul style={{ background: "#444", fontSize: "10px" }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=Robert}`}
            alt={comment.name}
            width={120}
            height={120}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
};

export default CommentsPage;
