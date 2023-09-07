"use client";
import React, { useState } from "react";

interface LikeButtonProps {
  id: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);

  return <button onClick={() => setLiked(!liked)}>{liked ? "♥" : "♡"}</button>;
};

export default LikeButton;
