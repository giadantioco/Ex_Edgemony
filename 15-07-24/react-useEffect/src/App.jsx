import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleclick = () => {
    setCount(count + 1);
  };

  // use effect con conosle.log
  // useEffect(() => {
  //   console.log(count);

  // }, [count])

  // use effect con richiesta http
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log("error", e);
        set;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [count]);

  return (
    <>
      <div className="container">
        <h1>Count {count}</h1>
        {/* se vogliamo renderizzare stato use effect a video */}
        {user && <p>{user.body}</p>}
        <button className="addBtn" onClick={handleclick}>
          add
        </button>
      </div>
    </>
  );
}

export default App;
