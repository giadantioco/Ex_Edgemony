import { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {
  // Add your state and useEffect logic here
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      {/* Render the list of posts here */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
