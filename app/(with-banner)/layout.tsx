import React from "react";
import styles from "./layaout.module.css";

interface PostLayoutProps {
  children: React.ReactNode;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className={styles.scrollingText}>Next Js 13 😎</div>
      <div>{children}</div>
    </div>
  );
};

export default PostLayout;
