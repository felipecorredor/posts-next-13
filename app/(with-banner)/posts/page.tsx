import React, { Suspense } from "react";
import ListOfPosts from "./listOfPosts";

const Loading = () => {
  return <div>Loading Posts...</div>;
};

const PotsPage = async () => {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
};

export default PotsPage;
