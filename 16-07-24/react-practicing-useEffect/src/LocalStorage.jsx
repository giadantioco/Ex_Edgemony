import { useState, useEffect } from "react";

function LocalStorage() {
  const [post, setPosts] = useState(null);

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => response.json())
      .then((data) => setPosts(data.body))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(post);
  });

  const setLocalStorage = () => {
    // to save
    localStorage.setItem("post", post);
  };

  // to get
  const cat = localStorage.getItem("myCat");

  return (
    <div>
      <button onClick={setLocalStorage}>Set local storage</button>
      <p>{post}</p>
    </div>
  );
}

export default LocalStorage;
