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
    getPost();
  }, []);

  useEffect(() => {
    console.log(post);
    setLocalStorage();
    console.log(post);
    logLocalStorage();
    console.log(post);
  }, []);

  const setLocalStorage = () => {
    // to save
    localStorage.setItem("post", JSON.stringify(post));
  };

  const logLocalStorage = () => {
    // to get
    const post = localStorage.getItem("post");
    console.log("log in post: ", JSON.parse(post));
  };

  return (
    <div>
      <button onClick={setLocalStorage}>Set local storage</button>
      <p>{post}</p>
    </div>
  );
}

export default LocalStorage;
